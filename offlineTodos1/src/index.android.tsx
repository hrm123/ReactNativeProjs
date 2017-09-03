import React, { Component } from 'react'
import App from './containers/App'
import { AppRegistry } from 'react-native'

interface Props {

}

interface State {

}

export default class offlineTodos1 extends Component<Props, State> {
    render() {
        return (
            <App />
        )
    }F
}

AppRegistry.registerComponent('offlineTodos1', () => offlineTodos1)