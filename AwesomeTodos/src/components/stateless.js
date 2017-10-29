import component from 'omniscient';
import immstruct from 'immstruct';
import  { View, TouchableHighlight, StyleSheet } from 'react-native';
import {Container, StyleProvider, Header, Content, Footer, Text, Input, Item, FooterTab, Badge, Title, Left, Right, Body, Icon, Button} from 'native-base';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5
    },
    text: {
        color: '#666666'
    }
});

const ButtonAT1 = ({ clicks }) =>{
    return (
      <TouchableHighlight
          onPress = {() => clicks.update(n => n + 1)}
          underlayColor='#efefef'
          style={styles.button}>
        <Text
            style={[styles.text]}
        >
            text text
        </Text>
      </TouchableHighlight>
    )};

const ButtonAT = ({ clicks }) =>{
    return (
        <Button
            onPress = {() => clicks.update(n => n + 1)}
        >
            <Text>
                 `clicks ${clicks.deref()}`
            </Text>
        </Button>
    )};

const OmniButton = component(ButtonAT);

const App1 = component(function App (state) {
    return (
        <View style={styles.container} >
            <OmniButton clicks={state.cursor('clicks')} />
        </View>
    )
});


const data = immstruct({ clicks: 0 });

// render loop
const updateOnChange = [{
    componentDidMount: function () {
        const self = this;
        data.on('swap', function () {
            self.forceUpdate();
        });
    }
}];

const WrapperComponent = component(updateOnChange, function WrapperComponent () {
    return App1(data.cursor());
});

export default WrapperComponent;