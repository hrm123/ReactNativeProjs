import React from 'react'
import {Text, View} from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
const todosActions =  require('../actions/todosActions')
import * as Redux from 'redux'
import DatePicker from './datepicker'
import Moment from 'moment'
import {styles} from '../styles/common-styles.js'
import Button from '../components/Button'

export interface SettingsTabProps  {
}

export interface SettingsTabConnectProps {
    LookupPeriodStart: string,
    LookupPeriodEnd: string,
    Password: string,
    EncryptionSet: boolean,
    UserUnlocked: boolean
}

export interface SettingsTabDispatchProps {
    onSettingsChanged:  (newVal) => void
}

type SettingsTabFullProps = SettingsTabProps & SettingsTabDispatchProps & SettingsTabConnectProps & TodosTSTypes.ITabCommonConnectProps

export class SettingsTab extends React.Component<SettingsTabFullProps, TodosTSTypes.SettingsState> {
    constructor(props: SettingsTabFullProps) {
        super(props)
        this.state = {
            EncryptionSet: true,
            UserUnlocked: true,
            LookupPeriodStart: Moment().add(-2, 'years').startOf('day').toDate(),
            LookupPeriodEnd: Moment().add(10, 'years').startOf('day').toDate(),
            Password: ""

        }
    }

    submitTodo = () => {
            let newState = Object.assign({}, this.state)
            this.props.onSettingsChanged(newState)

    }

    public render(): JSX.Element {

        let passwordUI = <View style={styles.formGroupRow1}>
            <View style={styles.formRowLabel}>
                <Text>Password</Text>
            </View>
            <View style={styles.formRowControl}>
                <Text>{this.props.Password}</Text>
            </View>
        </View>;

        return (
        <View style={styles.formGroup}>
            {passwordUI}
            <View style={styles.formGroupRow}>
                <View style={styles.formRowLabel}>
                    <Text>Todos since</Text>
                </View>
                <View style={styles.formRowControl}>
                    <DatePicker placeholderText="Enter start date"/>
                </View>
            </View>
            <View style={styles.formGroupRow}>
                <View style={styles.formRowLabel}>
                <Text>Todos till</Text>
                </View>
                <View style={styles.formRowControl}>
                    <DatePicker placeholderText="Enter end date"  />
                </View>
            </View>
            <View style={{flex:5, alignItems:"flex-end"}}>
                <Button submitTodo={this.submitTodo} />
            </View>
        </View>


        )
    }
}


const mapStateToProps = (state: TodosTSTypes.AppState /*, ownProps?: Props */): SettingsTabConnectProps => {
    const currentProps: SettingsTabConnectProps = Object.assign({}, this.props,  {
        EncryptionSet: state.settings.EncryptionSet,
        UserUnlocked: state.settings.UserUnlocked,
        LookupPeriodStart: state.settings.LookupPeriodStart,
        LookupPeriodEnd: state.settings.LookupPeriodEnd,
        Password: state.settings.Password
    })
    return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): SettingsTabDispatchProps => {
    return {
        onSettingsChanged: (newSettings) => {
            // console.log('in onSubmitClick')
            dispatch(todosActions.settingsChanged(newSettings))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsTab)
