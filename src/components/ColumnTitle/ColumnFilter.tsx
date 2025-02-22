import React, { memo, useCallback } from 'react'
import { Popover } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RowMetaField } from '../../interfaces/rowMeta'
import { MultivalueFieldMeta, WidgetListField, WidgetMeta } from '../../interfaces/widget'
import styles from './ColumnFilter.less'
import { $do } from '../../actions/actions'
import { Store } from '../../interfaces/store'
import { BcFilter } from '../../interfaces/filters'
import { FieldType } from '../../interfaces/view'
import cn from 'classnames'
import filterIcon from './filter-solid.svg'
import FilterPopup from '../FilterPopup/FilterPopup'
import FilterField from '../ui/FilterField/FilterField'
import { PickListFieldMeta, WidgetTypes } from '@tesler-ui/schema'

/**
 * @deprecated TODO: Remove in 2.0.0 by merging with ColumnFilterProps
 */
export interface ColumnFilterOwnProps {
    widgetName: string
    widgetMeta: WidgetListField
    rowMeta: RowMetaField
}

export interface ColumnFilterProps extends ColumnFilterOwnProps {
    /**
     * @deprecated TODO: Remove in 2.0.0 in favor of widget
     */
    bcName?: string
    /**
     * @deprecated TODO: Remove in 2.0.0, handled internally
     */
    filter?: BcFilter
    /**
     * @deprecated TODO: Remove in 2.0.0, handled internaly
     */
    widget?: WidgetMeta
    components?: {
        popup: React.ReactNode
    }
    /**
     * @deprecated TODO: Remove in 2.0.0, handled by ColumnFilterPopup now
     */
    onApply?: (bcName: string, filter: BcFilter) => void
    /**
     * @deprecated TODO: Remove in 2.0.0, handled by ColumnFilterPopup now
     */
    onCancel?: (bcName: string, filter: BcFilter) => void
    /**
     * @deprecated TODO: Remove in 2.0.0, handled internally
     */
    onMultivalueAssocOpen?: (bcName: string, calleeBCName: string, assocValueKey: string, associateFieldKey: string) => void
}

export function ColumnFilter({ widgetName, widgetMeta, rowMeta, components }: ColumnFilterProps) {
    const widget = useSelector((store: Store) => store.view.widgets.find(item => item.name === widgetName))
    const bcName = widget?.bcName
    const effectiveFieldMeta = (widget?.fields?.find((item: WidgetListField) => item.key === widgetMeta.filterBy) ??
        widgetMeta) as WidgetListField
    const filter = useSelector((store: Store) => store.screen.filters[bcName]?.find(item => item.fieldName === effectiveFieldMeta.key))
    const [value, setValue] = React.useState(filter?.value)
    const [visible, setVisible] = React.useState(false)
    const dispatch = useDispatch()

    React.useEffect(() => {
        setValue(filter?.value)
    }, [filter?.value])

    const fieldMeta = effectiveFieldMeta as MultivalueFieldMeta | PickListFieldMeta
    const fieldMetaMultivalue = effectiveFieldMeta as MultivalueFieldMeta
    const fieldMetaPickListField = effectiveFieldMeta as PickListFieldMeta
    const assocWidget = useSelector((store: Store) =>
        store.view.widgets.find(item => item.bcName === fieldMetaPickListField.popupBcName && item.type === WidgetTypes.AssocListPopup)
    )

    const isPickList = effectiveFieldMeta.type === FieldType.pickList
    const isMultivalue = [FieldType.multivalue, FieldType.multivalueHover].includes(effectiveFieldMeta.type) || isPickList

    const handleVisibleChange = useCallback(
        (eventVisible: boolean) => {
            if (isMultivalue && eventVisible) {
                setVisible(false)
                dispatch(
                    $do.showViewPopup({
                        bcName: fieldMeta.popupBcName,
                        widgetName: assocWidget?.name,
                        calleeBCName: widget?.bcName,
                        calleeWidgetName: widget?.name,
                        assocValueKey: !isPickList ? fieldMetaMultivalue.assocValueKey : fieldMetaPickListField.pickMap[fieldMeta.key],
                        associateFieldKey: !isPickList ? fieldMetaMultivalue.associateFieldKey : fieldMeta.key,
                        isFilter: true
                    })
                )
            } else {
                setVisible(!visible)
            }
        },
        [visible, isMultivalue, isPickList, fieldMeta, assocWidget, widget, fieldMetaMultivalue, fieldMetaPickListField, dispatch]
    )

    const handleClose = useCallback(() => setVisible(false), [])

    const content = components?.popup ?? (
        <FilterPopup widgetName={widgetName} fieldKey={effectiveFieldMeta.key} value={value} onApply={handleClose} onCancel={handleClose}>
            <FilterField widgetFieldMeta={effectiveFieldMeta} rowFieldMeta={rowMeta} value={value} onChange={setValue} />
        </FilterPopup>
    )

    return (
        <Popover
            trigger="click"
            content={!isMultivalue && content}
            visible={!isMultivalue && visible}
            onVisibleChange={handleVisibleChange}
        >
            <div
                className={cn(styles.icon, { [styles.active]: filter?.value?.toString()?.length > 0 })}
                dangerouslySetInnerHTML={{ __html: filterIcon }}
            />
        </Popover>
    )
}

/**
 * @category Components
 */
export default memo(ColumnFilter)
