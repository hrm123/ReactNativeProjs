import React, { Component } from 'react'
import AppMain from './containers/AppMain'
import { AppRegistry, View, Text } from 'react-native'
import configureStore from './configureStore'
const store = configureStore()
import { AsyncStorage } from 'react-native' // we need to import AsyncStorage to use as a storage engine
import {  persistStore } from 'redux-persist' // autoRehydrate
// import './ReactotronConfig'

interface Props {

}

interface State {
    rehydrated: boolean

}

export default class offlineTodos1 extends Component<Props, State> {
    constructor(){
        super()
        this.state = {rehydrated: false}
    }

    componentWillMount(){
        persistStore(store,{storage: AsyncStorage},()=> {
            console.log("rehydrated");
            this.setState({rehydrated:true});
        });
    }
    render() {
        if(this.state.rehydrated) {
            console.log(store.getState());
            return (
                <AppMain todoStore={store}/>
            )
        }
        else{
            return(
                <View>
                    <Text style={{marginTop:100, alignSelf:'center'}}>Setting up...</Text>
                </View>
            )
        }
    }
}

AppRegistry.registerComponent('offlineTodos1', () => offlineTodos1)