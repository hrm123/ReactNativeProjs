/**
 * Created by Ramm on 10/8/2017.
 */
import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { View, Text } from 'react-native';
import {Container, StyleProvider, Header, Content, Footer, Input, Item, FooterTab, Badge, Title, Left, Right, Body, Icon, Button} from 'native-base';
import styles from '../styles/common';

export default class Sidebar extends Component {
    render() {
        return (
            <Content style={{backgroundColor:'#FFFFFF'}}>
                <Button vertical>
                    <Icon name="person" />
                    <Text style={styles.bodyText}>Settings</Text>
                </Button>

            </Content>
        );
    }
}
