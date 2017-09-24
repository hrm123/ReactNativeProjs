import React, { Component } from 'react';
import { Text } from 'react-native';
import {Container, Header, Content, Footer, Title} from 'native-base';
export default class LayoutExample extends Component {
    render() {
        return (
        <Container>
            <Header>
                <Title>Header</Title>
            </Header>

            <Content>
                <Text> Your main content goes here </Text>
            </Content>

            <Footer>
                <Title>Footer</Title>
            </Footer>
        </Container>
    );
    }
}