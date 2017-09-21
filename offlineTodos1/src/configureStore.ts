// import { AsyncStorage } from 'react-native' // we need to import AsyncStorage to use as a storage engine
import { createStore, applyMiddleware, compose } from 'redux'
import {  autoRehydrate } from 'redux-persist' // autoRehydrate
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'remote-redux-devtools'
import { createLogger} from 'redux-logger'
// import promise from 'redux-promise'
import * as EnvironmentDetails from './environment'
import initialState from './reducers/initialState'


const configureStore: any = (args) => {
    const logger = createLogger({})
    const middlewares = [thunk ]
    debugger
    initialState.settings.Password = args.pwd
    initialState.settings.UserUnlocked = true
    if ( EnvironmentDetails.env === 'dev') {
        middlewares.push(logger)
        return  createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(...middlewares),
                autoRehydrate({log: true})
            )
        )
        // persistStore(store, { storage: AsyncStorage }, onComplete)
    }
    else{
        return createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(...middlewares),
                autoRehydrate({log: true})
            )
        )
        // persistStore(store, { storage: AsyncStorage }, onComplete)
    }
    // middlewares.push(promise)


}

export default configureStore