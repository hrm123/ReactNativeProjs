import React, { Component } from 'react'
import AppWithNavigationState from './navigation'
import { Provider  } from 'react-redux'
import configureStore from '../configureStore'

// creates our Redux store (elsewhere)
const store = configureStore()
// const RouterWithRedux = connect()(Router)

export interface IAppProps {

}

class App extends Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props)
        this.isLoaded = this.isLoaded.bind(this)
        this.state = {
            isLoading: true,
            store: configureStore(this.isLoaded)
        }
    }

    isLoaded() {
        this.setState({ isLoading: false })
    }

    render() {
        if (this.state.isLoading) return undefined

        return(
            <Provider store={ store }>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

export default App