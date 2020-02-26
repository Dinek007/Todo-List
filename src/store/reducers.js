import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'

const defaultState = {
    test: 'damian',
    items: []
}

export const reducer = handleActions({
    [ACTIONS.TEST]: (state, { payload }) =>
        produce(state, draft => {
            draft.test = 'work'
        }),
    [ACTIONS.ADD_ITEM]: (state, { payload }) =>
        produce(state, draft => {
            draft.items = [
                ...draft.items,
                payload
            ]
        })
}, defaultState)
