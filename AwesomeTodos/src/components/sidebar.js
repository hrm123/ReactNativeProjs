/**
 * Created by Ramm on 10/8/2017.
 */
import React, { Component } from 'react';
import { Drawer } from 'native-base';
import {Content} from 'native-base';
import { View, Text } from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <Content style={{backgroundColor:'#FFFFFF'}}>
                <Text>Drawer</Text>
            </Content>
        );
    }
}
