import {
  StackNavigator, TabBarBottom, TabNavigator,
  addNavigationHelpers
  } from 'react-navigation'
  import React from 'react'
  import {  connect  } from 'react-redux'
  import FirstScreen from './MainTab'
  import SecondScreen from './DeleteTab'
  import ThirdScreen from './DoneTab'

export const defaultTabs = {
    labelStyle: {
      fontFamily: 'nemoy-medium',
      fontSize: 16
    },
    indicatorStyle: {
      borderColor: 'lightgray',
      borderWidth: 2
    },
    style: {
      backgroundColor: 'black'
    },
    tabStyle: {
      padding: 0
    }
  }

export const BottomTabs = TabNavigator({
    FirstTab: {
      screen: FirstScreen,
        navigationOptions: { title: 'Pending' }
    },
    SecondTab: {
      screen: SecondScreen,
        navigationOptions: { title: 'Deleted' }
    },
    ThirdTab: {
      screen: ThirdScreen,
        navigationOptions: { title: 'Done' }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      ...defaultTabs
    }
  })

export const MainNavigation = StackNavigator({
  App: {
    screen: BottomTabs
    }}, {
      initialRouteName: 'App',
      mode: 'card',
      headerMode: 'none'
    })

/*
export const AppWithNavigationState = ({ dispatch, nav }) => {
  debugger;
    let navHlprs = addNavigationHelpers({ dispatch, state: nav });
    return (
        <MainNavigation navigation={navHlprs} screenProps={ {'uuid': nav.uuid} }/>
    )
}

const mapStateToProps = state => ({
    nav: state.nav
})
*/

export class AppWithNavigationState extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public render(): JSX.Element {
        let navHlprs = addNavigationHelpers({ dispatch:this.props.dispatch, state: this.props.nav });
        return (
            <MainNavigation navigation={navHlprs} screenProps={ {'uuid': '123'} }/>
        )
    }

}



const mapStateToProps = state => ({
    nav: state.nav
})


export default connect(
    mapStateToProps
)(AppWithNavigationState)

