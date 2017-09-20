import React from 'react'
import {Text, TextInput, View} from 'react-native'
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
    Password: string
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
            UserUnlocked: false,
            Password: "",
            passwordError: "",
            LookupPeriodStart: Moment().add(-2, 'years').startOf('day').toDate(),
            LookupPeriodEnd: Moment().add(10, 'years').startOf('day').toDate()
        }
    }

    submitTodo = () => {
        // console.log('button1')
        if(this.state.Password && this.state.Password.trim().length >0) {
            debugger;
            this.setState({passwordError: "", UserUnlocked: true})
            let newState = Object.assign({}, this.state, {passwordError: "", UserUnlocked: true})
            this.props.onSettingsChanged(newState)
        }
        else{
            this.setState({passwordError: "Invalid password"})
        }
    }

    public render(): JSX.Element {

        let passwordError =  <Text style={{color: "red"}}>{this.state.passwordError}</Text>
        let passwordUI = <View style={styles.formGroupRow1}>
            <View style={styles.formRowLabel}>
                <Text>Password</Text>
            </View>
            <View style={styles.formRowControl}>
                <TextInput
                    value={this.props.Password}
                    style={styles.input}
                    placeholder='Enter password'
                    selectionColor='#666666'
                    onChangeText={ (text) => this.setState({Password : text})}
                />{passwordError}
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
                    <DatePicker placeholderText="Enter end date" />
                </View>
            </View>
            <View style={{flex:5, alignItems:"flex-end"}}>
                <Button submitTodo={this.submitTodo} />
            </View>
        </View>


        )
    }
}


const mapStateToProps = (state: TodosTSTypes.SettingsState /*, ownProps?: Props */): SettingsTabConnectProps => {
    const currentProps: SettingsTabConnectProps = Object.assign({}, this.props,  {
        EncryptionSet: state.EncryptionSet,
        UserUnlocked: state.UserUnlocked,
        LookupPeriodStart: state.LookupPeriodStart,
        LookupPeriodEnd: state.LookupPeriodEnd,
        Password: state.Password
    })
    return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): SettingsTabDispatchProps => {
    return {
        onSettingsChanged: (newSettings) => {
            debugger;
            // console.log('in onSubmitClick')
            dispatch(todosActions.settingsChanged(newSettings))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsTab)
