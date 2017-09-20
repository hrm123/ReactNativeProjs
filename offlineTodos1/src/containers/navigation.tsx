import {
  StackNavigator, TabBarBottom, TabNavigator,
  addNavigationHelpers
  } from 'react-navigation'
  import React from 'react'
  import {  connect  } from 'react-redux'
  import FirstScreen from './MainTab'
  import SecondScreen from './DeleteTab'
  import ThirdScreen from './DoneTab'
  import FourthScreen from './settings'

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


export class BottomTabs extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    getAuthTabs = () => {
        let authRoutes: {[id: string] : any} = {}
        authRoutes["FirstTab"] = {
                    screen: FirstScreen,
                    navigationOptions: { title: 'Pending' }
                }
        authRoutes["SecondTab"] = {
                    screen: SecondScreen,
                    navigationOptions: { title: 'Deleted' }
                }
        authRoutes["ThirdTab"] =  {
                    screen: ThirdScreen,
                    navigationOptions: { title: 'Done' }
                }
        authRoutes["FourthTab"] =  {
                    screen: FourthScreen,
                    navigationOptions: {title: 'Settings'}

                }
                return authRoutes
            }

    getUnauthTabs = () => {
        let unauthRoutes: {[id: string] : any} = {}
        unauthRoutes["FourthTab"] = {
            screen: FourthScreen,
            navigationOptions: {title: 'Settings'}

        }
        return unauthRoutes
    }


    public render(): JSX.Element {
        let {authenticated} = this.props.screenProps;
        const Tabs = TabNavigator(
                    authenticated ? this.getAuthTabs() : this.getUnauthTabs()
                ,
                {
                    tabBarComponent: TabBarBottom,
                    tabBarPosition: 'bottom',
                    tabBarOptions: {
                        ...defaultTabs
                    }
                })
        return (<Tabs />)
    }

}

export const MainNavigation = StackNavigator({
  App: {
    screen: BottomTabs
    }}, {
      initialRouteName: 'App',
      mode: 'card',
      headerMode: 'none'
    })

export class AppWithNavigationState extends React.Component<any, any> {
    constructor(props) {
        super(props)
    }

    public render(): JSX.Element {
        let navHlprs = addNavigationHelpers({ dispatch:this.props.dispatch, state: this.props.nav });
        return (
            <MainNavigation navigation={navHlprs}  screenProps={ {'uuid': '123', authenticated: this.props.authenticated } }/>
        )
    }

}

const mapStateToProps = state => {
    return Object.assign({} , {nav: state.nav}, {authenticated : state.settings.UserUnlocked})
}


export default connect(
    mapStateToProps
)(AppWithNavigationState)

