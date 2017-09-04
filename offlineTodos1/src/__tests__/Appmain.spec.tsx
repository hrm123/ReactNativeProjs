import 'react-native';
import React from 'react';
import AppMain from '../containers/AppMain'
import configureStoreMock from '../configureStoreMock'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const store = configureStoreMock(() => { console.log("mock store loaded");} )

it('renders correctly', () => {
  renderer.create(
    <AppMain todoStore={ store }/>
  );
});