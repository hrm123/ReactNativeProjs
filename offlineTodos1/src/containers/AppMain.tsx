import React, { Component } from 'react'
import NavItems  from './navigation'
import { Provider  } from 'react-redux'

export interface IAppProps {
    todoStore: any
}

class AppMain extends Component<IAppProps, any> {
    constructor(props: IAppProps) {
        super(props)
    }
        /*
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
    */

    render() {
        debugger;
        // if (this.state.isLoading) return undefined

        return(
            <Provider store={ this.props.todoStore }>
                <NavItems />
            </Provider>
        )
    }
}

export default AppMain