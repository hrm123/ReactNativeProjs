import React, { Component } from 'react'
import AppMain from './containers/AppMain'
import { AppRegistry, View, Text } from 'react-native'
import configureStore from './configureStore'

import { AsyncStorage } from 'react-native' // we need to import AsyncStorage to use as a storage engine
import {  persistStore, createTransform } from 'redux-persist' // autoRehydrate
// import './ReactotronConfig'
import CryptoJS from 'crypto-js';
import PasswordUI from './components/password'

interface Props {

}

interface State {
    rehydrated: boolean,
    password : string
}

let store

export default class offlineTodos1 extends Component<Props, State> {
    constructor(){
        super()
        this.state = {rehydrated: false, password: ''}
    }

    loadStoreAndPersist = (password) => {
        store = configureStore({pwd: password})
        const encrypt = createTransform(
            (inboundState, key) => {
                if (!inboundState) return inboundState;
                const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), this.state.password + key);

                return cryptedText.toString();
            },
            (outboundState, key) => {
                if (!outboundState) return outboundState;
                const bytes = CryptoJS.AES.decrypt(outboundState, this.state.password + key);
                const decrypted = bytes.toString(CryptoJS.enc.Utf8);

                return JSON.parse(decrypted);
            },
        );


        persistStore(store,{storage: AsyncStorage, transforms: [encrypt]},()=> {
            console.log("rehydrated");
            this.setState({rehydrated:true});
        });
    }

    passwordSet = (pwd) => {
        this.setState({password: pwd, rehydrated: false})
        this.loadStoreAndPersist(pwd)
    }

    componentWillMount(){

    }

    render() {
        if(this.state.rehydrated) {
            return (
                <AppMain todoStore={store}/>
            )
        }
        else{
            if(this.state.password.length ==0)
            {
                return (
                    <View>
                        <PasswordUI onPasswordSet={this.passwordSet} />
                    </View>
                )

            }
            else {
                return (
                    <View>
                        <Text style={{marginTop: 100, alignSelf: 'center'}}>Setting up...</Text>
                    </View>
                )
            }
        }
    }
}

AppRegistry.registerComponent('offlineTodos1', () => offlineTodos1)