import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'

const defaultState = {
    editedId: null,
    showAddItemForm: false,
    items: [],
}

export const reducer = handleActions({
    [ACTIONS.ADD_ITEM]: (state, { payload }) =>
        produce(state, draft => {
            draft.items = [
                ...draft.items,
                payload
            ]
        }),
    [ACTIONS.REMOVE_ITEM]: (state, { payload }) =>
        produce(state, draft => {
            const removed = draft.items.filter(el => el.id !== payload)
            draft.items = removed
        }),
    [ACTIONS.EDIT_ITEM]: (state, { payload }) =>
        produce(state, draft => {
            const editedIndex = draft.items.findIndex(el => el.id === payload.id)
            draft.items[editedIndex] = payload
        }),
    [ACTIONS.SHOW_EDIT_FORM]: (state, { payload }) =>
        produce(state, draft => {
            draft.showAddItemForm = true
            draft.editedId = payload
        }),
    [ACTIONS.HIDE_EDIT_FORM]: (state) =>
        produce(state, draft => {
            draft.showAddItemForm = false
            draft.editedId = null
        })

}, defaultState)
