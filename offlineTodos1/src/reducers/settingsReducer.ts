import initialState from './initialState'
import {REHYDRATE} from 'redux-persist/constants'
import * as TodosTsActionTypes from '../actions/actionTypes'
import * as TodosTsTypes from '../types/todoTypes'

export default function settingsReducer(currentState: TodosTsTypes.SettingsState = initialState.settings,
                                     action: TodosTsActionTypes.TodosBaseActions) {
    switch (action.type) {
        case TodosTsActionTypes.SETTINGS_CHANGE:
            debugger;
            return Object.assign({}, currentState, action.settings)
        case REHYDRATE:
            debugger
            const savedState = action.payload;
            if (savedState.maxTodoIndex) {
                return {...currentState, ...savedState}
            } else {
                return currentState
            }
        default:
            return currentState
    }
}