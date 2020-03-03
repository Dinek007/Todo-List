import { createStore, applyMiddleware } from 'redux'

import { reducer } from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension'


export const configureStore = () => {
    return createStore(
        reducer, composeWithDevTools(applyMiddleware())
    );
}