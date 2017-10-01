import React, { Component } from 'react';
import { Text } from 'react-native';
import {Container, StyleProvider, Header, Content, Footer, Input, Item, FooterTab, Badge, Title, Left, Right, Body, Icon, Button} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class LayoutExample extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Filter Todos" />
                            </Item>

                    </Header>

                    <Content>
                        <Text> Your main content goes here </Text>
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button badge vertical>
                                <Badge><Text style={{color: 'white'}}>2</Text></Badge>
                                <Icon name="ios-add" />
                                <Text>Pending</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="md-checkmark" />
                                <Text>Done</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="trash" />
                                <Text>Deleted</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="person" />
                                <Text>Settings</Text>
                            </Button>
                        </FooterTab>

                    </Footer>
                </Container>
            </StyleProvider>
    );
    }
}