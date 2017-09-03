import React, { Component } from 'react'
import AppMain from './containers/AppMain'
import { AppRegistry } from 'react-native'

interface Props {

}

interface State {

}

export default class offlineTodos1 extends Component<Props, State> {
    render() {
        return (
            <AppMain />
        )
    }F
}

AppRegistry.registerComponent('offlineTodos1', () => offlineTodos1)