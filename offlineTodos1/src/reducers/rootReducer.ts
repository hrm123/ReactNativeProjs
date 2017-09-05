
import {combineReducers} from 'redux'
import todos from './todosReducer'
import { NavigationActions } from 'react-navigation';
import {MainNavigation}  from '../containers/navigation'
// import DeviceInfo from 'react-native-device-info';

/*
const initialNavState =  // MainNavigation.router.getStateForAction(MainNavigation.router.getActionForPathAndParams('App'), {})
 MainNavigation.router.getStateForAction(NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({routeName: 'App'})
  ]
}))
*/

function nav(state , action) {
  let nextState;
  let uuid = '123'; // DeviceInfo.getUniqueID();
  switch (action.type) {
    case 'Login':
      nextState = MainNavigation.router.getStateForAction(
          NavigationActions.back(),
          state
      );
      break;
    case 'Logout':
      nextState = MainNavigation.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
      );
      break;
    default:
      nextState = MainNavigation.router.getStateForAction(action, state);
      Object.assign(nextState,{uuid})
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const rootReducer = combineReducers({
  // short hand property names
  todos,
    nav
})

export default rootReducer