import { types, Epic, $do, AnyAction } from '../actions/actions'
import { Observable } from 'rxjs/Observable'
import * as api from '../api/api'
import { buildBcUrl } from '../utils/strings'
import {
    OperationError,
    OperationErrorEntity,
    OperationModalInvokeConfirm,
    OperationPostInvokeConfirmType,
    OperationPostInvokeAny,
    OperationPreInvoke
} from '../interfaces/operation'
import { buildLocation } from '../Provider'
import { changeLocation } from '../reducers/router'
import { AxiosError } from 'axios'
import { parseBcCursors } from '../utils/history'
import { WidgetTypes } from '../interfaces/widget'
import { fileUploadConfirm } from './view/fileUploadConfirm'
import { showFileUploadPopup } from './view/showFileUploadPopup'
import { sendOperation } from './view/sendOperation'
import { showAssocPopup } from './view/showAssocPopup'
import { sendOperationAssociate } from './view/sendOperationAssociate'

/**
 * Sends row meta request when `forceActive` field fires `onChange`
 *
 * @param action$
 * @param store
 * @category Epics
 */
export const getRowMetaByForceActive: Epic = (action$, store) =>
    action$.ofType(types.changeDataItem).mergeMap(action => {
        const state = store.getState()
        const initUrl = state.view.url
        const { bcName, cursor, disableRetry } = action.payload

        const isBcHierarchy = state.view.widgets.some(widget => {
            return (
                widget.bcName === bcName &&
                widget.type === WidgetTypes.AssocListPopup &&
                (widget.options?.hierarchySameBc || widget.options?.hierarchyFull)
            )
        })
        if (isBcHierarchy) {
            return Observable.empty<never>()
        }

        const bcUrl = buildBcUrl(bcName, true)
        const pendingChanges = state.view.pendingDataChanges[bcName][cursor]
        const handledForceActive = state.view.handledForceActive[bcName]?.[cursor] || {}
        const currentRecordData = state.data[bcName]?.find(record => record.id === cursor)
        const fieldsRowMeta = state.view.rowMeta[bcName]?.[bcUrl]?.fields
        let changedFiledKey: string = null

        // среди forceActive-полей в дельте ищем то которое изменилось по отношению к обработанным forceActive
        // или не содержится в нем, устанавливаем флаг необходимости отправки запроса если такое поле найдено
        const someForceActiveChanged = fieldsRowMeta
            ?.filter(field => field.forceActive && pendingChanges[field.key] !== undefined)
            .some(field => {
                const result = pendingChanges[field.key] !== handledForceActive[field.key]
                if (result) {
                    changedFiledKey = field.key
                }
                return result
            })

        if (someForceActiveChanged && !disableRetry) {
            return api
                .getRmByForceActive(state.screen.screenName, bcUrl, { ...pendingChanges, vstamp: currentRecordData.vstamp })
                .mergeMap(data => {
                    return store.getState().view.url === initUrl
                        ? Observable.of(
                              $do.forceActiveRmUpdate({
                                  rowMeta: data,
                                  currentRecordData,
                                  bcName,
                                  bcUrl,
                                  cursor
                              })
                          )
                        : Observable.empty<never>()
                })
                .catch((e: AxiosError) => {
                    console.error(e)
                    let viewError: string = null
                    let entityError: OperationErrorEntity = null
                    const operationError = e.response?.data as OperationError
                    if (e.response?.data === Object(e.response?.data)) {
                        entityError = operationError?.error?.entity
                        viewError = operationError?.error?.popup?.[0]
                    }
                    return store.getState().view.url === initUrl
                        ? Observable.concat(
                              Observable.of(
                                  $do.changeDataItem({
                                      bcName,
                                      cursor,
                                      dataItem: { [changedFiledKey]: currentRecordData[changedFiledKey] },
                                      disableRetry: true
                                  })
                              ),
                              Observable.of($do.forceActiveChangeFail({ bcName, bcUrl, viewError, entityError }))
                          )
                        : Observable.empty<never>()
                })
        }
        return Observable.empty<never>()
    })

/**
 * Clears descendant business components pending changes on cursor change
 *
 * TODO: Review required as it might be no longer valid due to autosave middleware implementation
 *
 * @param action$
 * @param store
 * @category Epics
 */
export const clearPendingDataChangesAfterCursorChange: Epic = (action$, store) =>
    action$.ofType(types.bcChangeCursors).mergeMap(action => {
        const state = store.getState()

        /*
         *  Если при загрузке view курсор проставился не во всех бк
         * то дописать недостающие курсоры
         */
        const nextCursors = parseBcCursors(state.router.bcPath) || {}
        const cursorsDiffMap: Record<string, string> = {}
        Object.entries(nextCursors).forEach(entry => {
            const [bcName, cursor] = entry
            const bc = state.screen.bo.bc[bcName]
            if (!bc || bc?.cursor !== cursor) {
                cursorsDiffMap[bcName] = cursor
            }
        })
        if (Object.keys(cursorsDiffMap).length) {
            return Observable.of($do.bcChangeCursors({ cursorsMap: cursorsDiffMap }))
        }

        return Observable.empty<never>()
    })

/**
 *
 * @param action$
 * @param store
 * @category Epics
 */
export const selectTableCellInit: Epic = (action$, store) =>
    action$.ofType(types.selectTableCellInit).mergeMap(action => {
        const resultObservables: Array<Observable<AnyAction>> = []
        const state = store.getState()

        const { rowId: nextRowId, fieldKey } = action.payload

        const nextWidget = state.view.widgets.find(widget => widget.name === action.payload.widgetName)
        const nextBcName = nextWidget.bcName
        const nextBcCursor = state.screen.bo.bc[nextBcName]?.cursor

        const selectedCell = state.view.selectedCell
        if (nextRowId !== nextBcCursor) {
            resultObservables.push(Observable.of($do.bcSelectRecord({ bcName: nextBcName, cursor: nextRowId })))
        }

        if (
            !selectedCell ||
            fieldKey !== selectedCell.fieldKey ||
            nextRowId !== selectedCell.rowId ||
            nextWidget.name !== selectedCell.widgetName
        ) {
            resultObservables.push(Observable.of($do.selectTableCell({ widgetName: nextWidget.name, rowId: nextRowId, fieldKey })))
        }

        return Observable.concat(...resultObservables)
    })

/**
 *
 * @param action$
 * @param store
 * @category Epics
 */
export const showAllTableRecordsInit: Epic = (action$, store) =>
    action$.ofType(types.showAllTableRecordsInit).mergeMap(action => {
        const resultObservables: Array<Observable<AnyAction>> = []

        const { bcName, cursor } = action.payload
        const route = store.getState().router
        resultObservables.push(Observable.of($do.bcChangeCursors({ cursorsMap: { [bcName]: null } })))
        const bcPath = route.bcPath.slice(0, route.bcPath.indexOf(`${bcName}/${cursor}`))
        const url = buildLocation({ ...route, bcPath })

        resultObservables.push(Observable.of($do.bcForceUpdate({ bcName })))
        changeLocation(url)

        return Observable.concat(...resultObservables)
    })

/**
 * Returns an array of observables for handling post- and pre-invokes from any epics handling operations
 *
 * @param widgetName Name of the widget that initiated the operation
 * @param postInvoke Response post-invoke
 * @param preInvoke Response pre-invoke
 * @param operationType Which operation was performed
 * @param bcName
 * @param cursor BC's cursor
 * @category Utils
 */
export function postOperationRoutine(
    widgetName: string,
    postInvoke: OperationPostInvokeAny,
    preInvoke: OperationPreInvoke,
    operationType: string,
    bcName: string, // TODO: Remove in 2.0.0
    cursor?: string
) {
    const postInvokeConfirm = Object.values(OperationPostInvokeConfirmType).includes(postInvoke?.type as OperationPostInvokeConfirmType)
    const result: AnyAction[] = []
    if (postInvoke) {
        result.push($do.processPostInvoke({ bcName, postInvoke, widgetName, cursor }))
    }
    if (postInvokeConfirm) {
        result.push(
            $do.processPostInvokeConfirm({
                bcName,
                operationType,
                widgetName,
                postInvokeConfirm: postInvoke as OperationModalInvokeConfirm
            })
        )
    }
    if (preInvoke) {
        result.push(
            $do.processPreInvoke({
                bcName,
                operationType,
                widgetName,
                preInvoke
            })
        )
    }
    return result.map(item => Observable.of(item))
}

export const viewEpics = {
    sendOperation,
    getRowMetaByForceActive,
    sendOperationAssociate,
    clearPendingDataChangesAfterCursorChange,
    selectTableCellInit,
    showAllTableRecordsInit,
    showAssocPopup,
    showFileUploadPopup,
    fileUploadConfirm
}
