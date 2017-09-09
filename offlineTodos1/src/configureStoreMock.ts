import thunk from 'redux-thunk'
import { createLogger} from 'redux-logger'
import configureMockstore from 'redux-mock-store'
// import * as TodosTSTypes from './types/todoTypes'
import initState from './reducers/initialState'
const configureMockStore: any = (onComplete) => {
    const logger = createLogger({})
    const middlewares = [thunk, logger ]

    const mockStore =  configureMockstore(
        middlewares
    )
    onComplete()
    return mockStore({todos: initState})
}

export default configureMockStore