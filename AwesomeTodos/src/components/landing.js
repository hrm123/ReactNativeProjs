import React, { Component } from 'react';
import { Text , TextInput} from 'react-native';
import {Container, StyleProvider, Header, Content, Footer, Input, Item, FooterTab, Badge, Title, Left, Right, Body, Icon, Button} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class LandingPage extends Component {
    render() {
        let styl = getTheme(material);
        console.log(styl);
        return (
            <StyleProvider style={styl}>
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