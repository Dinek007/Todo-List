import { createAction } from 'redux-actions'

import { ACTIONS } from './consts'

export const actions = {
    testAction: createAction(ACTIONS.TEST, data => data)
}