import React, { Component } from 'react';
import { Text , TextInput} from 'react-native';
import {Container, StyleProvider, Header, Content, Footer, Input, Item, FooterTab, Badge, Title, Left, Right, Body, Icon, Button} from 'native-base';
// import getTheme from '../../native-base-theme/components';
// import material from '../../native-base-theme/variables/material';
import styles from '../styles/common';
import TodoList from './stateless'

export default class LandingPage extends Component {
    render() {
        // let styl = getTheme(material);
        // console.log(styl);
        return (
                <Container>
                    <Header searchBar rounded>
                        <Body >
                            <Item >
                                <Icon name="ios-search" />
                                <Input placeholder="Type Filter text" placeholderTextColor="#fff"/>
                            </Item>
                        </Body>
                    </Header>

                    <Content>
                        <TodoList/>
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button vertical>
                                <Icon name="ios-add" />
                                <Text style={styles.bodyText}>Pending</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="md-checkmark" />
                                <Text style={styles.bodyText}>Done</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="trash" />
                                <Text style={styles.bodyText}>Deleted</Text>
                            </Button>
                            <Button badge vertical>
                                <Badge><Text style={{color: 'white'}}>2</Text></Badge>
                                <Icon name="md-alert" />
                                <Text style={styles.bodyText}>Alerts</Text>
                            </Button>
                        </FooterTab>

                    </Footer>
                </Container>
    );
    }
}