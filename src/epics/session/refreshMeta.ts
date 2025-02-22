/*
 * TESLER-UI
 * Copyright (C) 2018-2020 Tesler Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { $do, Epic, types } from '../../actions/actions'
import { Observable } from 'rxjs/Observable'
import { refreshMeta } from '../../api'

/**
 * Performed on refresh meta data process.
 *
 * @param action$ This epic will fire on {@link ActionPayloadTypes.refreshMeta | refreshMeta} action
 * @param store Redux store instance
 * @category Epics
 */
export const refreshMetaEpic: Epic = (action$, store): Observable<any> =>
    action$.ofType(types.refreshMeta).mergeMap(() => {
        const state = store.getState()
        const { router } = state
        const { activeRole } = state.session
        return refreshMeta().switchMap(() => {
            return Observable.concat([
                $do.logoutDone(null),
                $do.login({ login: null, password: null, role: activeRole }),
                $do.changeLocation({
                    location: router,
                    action: 'PUSH'
                })
            ]).catch(error => Observable.of($do.loginFail(error)))
        })
    })
