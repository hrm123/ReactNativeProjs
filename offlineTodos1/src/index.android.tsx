import React, { Component } from 'react'
import AppMain from './containers/AppMain'
import { AppRegistry } from 'react-native'
import configureStore from './configureStore'
const store = configureStore(() => console.log("store loaded"))

interface Props {

}

interface State {

}

export default class offlineTodos1 extends Component<Props, State> {

    render() {
        return (
            <AppMain todoStore={store} />
        )
    }F
}

AppRegistry.registerComponent('offlineTodos1', () => offlineTodos1)