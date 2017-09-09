import { AsyncStorage } from 'react-native' // we need to import AsyncStorage to use as a storage engine
import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools'
import { createLogger} from 'redux-logger'
// import promise from 'redux-promise'
import * as EnvironmentDetails from './environment'

const configureStore: any = (onComplete) => {
    const logger = createLogger({})
    const middlewares = [thunk ]
    let store
    if ( EnvironmentDetails.env === 'dev') {
        middlewares.push(logger)
        store =  composeWithDevTools(
            applyMiddleware(...middlewares)
            , autoRehydrate()
        ) (createStore)(rootReducer)
    }
    else{
        store = createStore(
            rootReducer,
            undefined,
            compose(
                applyMiddleware(...middlewares),
                autoRehydrate()
            )
        )
    }
    // middlewares.push(promise)

    persistStore(store, { storage: AsyncStorage }, onComplete)
    return store
}

export default configureStore