import { createAction } from 'redux-actions'

import { ACTIONS } from './consts'

export const actions = {
    addItem: createAction(ACTIONS.ADD_ITEM, data => data),
    removeItem: createAction(ACTIONS.REMOVE_ITEM, data => data),
    editItem: createAction(ACTIONS.EDIT_ITEM, data => data),
    showEditForm: createAction(ACTIONS.SHOW_EDIT_FORM, data => data),
    hideEditForm: createAction(ACTIONS.HIDE_EDIT_FORM, data => data)
}