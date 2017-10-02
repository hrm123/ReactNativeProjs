import React, { Component } from 'react';
import { Text , TextInput} from 'react-native';
import {Container, StyleProvider, Header, Content, Footer, Input, Item, FooterTab, Badge, Tab, Tabs, TabHeading, Title, Left, Right, Body, Icon, Button} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';


const Tab1 = () => <Text>tab1</Text>
const Tab2 = () => <Text>tab2</Text>
const Tab3 = () => <Text>tab3</Text>
const Tab4 = () => <Text>tab4</Text>

export default class LayoutExample extends Component {
    render() {
        let styl = getTheme(material);
        console.log(styl);
        return (
            <StyleProvider style={styl}>
                <Container>
                    <Header searchBar rounded hasTabs >
                        <Left>
                            <Icon name="ios-menu" />
                        </Left>
                        <Body  >
                            <Item >
                                <Icon name="ios-search" />
                                <Input placeholder="Type Filter text"  style={{backgroundColor:"transparent"}}/>
                            </Item>
                        </Body>
                        <Right>
                            <Icon name="md-subway" />
                        </Right>
                    </Header>

                    <Tabs>
                        <Tab heading={ <TabHeading>
                            <Button badge>
                                <Icon name="ios-add" />
                                <Badge><Text style={{color: 'white'}}>2</Text></Badge>
                            </Button>
                            </TabHeading>}>
                            <Tab1 />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="md-checkmark" /></TabHeading>}>
                            <Tab2 />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="trash" /></TabHeading>}>
                            <Tab3 />
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="person" /></TabHeading>}>
                            <Tab4 />
                        </Tab>
                    </Tabs>

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