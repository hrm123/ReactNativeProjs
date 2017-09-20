import initialState from './initialState'
import {REHYDRATE} from 'redux-persist/constants'
import * as TodosTsActionTypes from '../actions/actionTypes'
import * as TodosTsTypes from '../types/todoTypes'

export default function settingsReducer(currentState: TodosTsTypes.SettingsState  = initialState.settings,
                                     action: TodosTsActionTypes.TodosBaseActions) {
    switch (action.type) {
        case TodosTsActionTypes.SETTINGS_CHANGE:
            debugger;
            return Object.assign({}, currentState, action.settings)
        case REHYDRATE:
            const savedState = action.payload;
            debugger;
            if(savedState && savedState.settings)
            {
                savedState.settings.UserUnlocked = false; // make user reenter password
            }
            if (savedState.todos && savedState.todos.maxTodoIndex) {
                return {...currentState, ...savedState.settings}
            } else {
                return currentState
            }
        default:
            return currentState
    }
}