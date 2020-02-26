import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'

const defaultState = {
    test: 'damian'
}

export const reducer = handleActions({
    [ACTIONS.TEST]: (state, { payload }) =>
        produce(state, draft => {
            draft.test = 'work'
        })
}, defaultState)
