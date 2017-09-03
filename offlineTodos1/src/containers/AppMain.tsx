import React, { Component } from 'react'
import * as NavItems  from './navigation'
import { Provider  } from 'react-redux'
import configureStore from '../configureStore'

// creates our Redux store (elsewhere)
const store = configureStore()
// const RouterWithRedux = connect()(Router)

export interface IAppProps {

}

class AppMain extends Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props)
        this.isLoaded = this.isLoaded.bind(this)
        this.state = {
            isLoading: true,
            store: configureStore(this.isLoaded)
        }
    }

    isLoaded() {
        debugger;
        this.setState({ isLoading: false })
    }

    render() {
        debugger;
        if (this.state.isLoading) return undefined

        return(
            <Provider store={ store }>
                <NavItems.connectedNavApp />
            </Provider>
        )
    }
}

export default AppMain