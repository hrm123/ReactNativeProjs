import React from 'react'
import {Text, TextInput, View} from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
const todosActions =  require('../actions/todosActions')
import * as Redux from 'redux'
import DatePicker from './datepicker'
import Moment from 'moment'
import {styles} from '../styles/common-styles.js'
import CheckBox from 'react-native-checkbox'
import Button from '../components/Button'

export interface SettingsTabProps  {
}

export interface SettingsTabConnectProps {
    LookupPeriodStart: string,
    LookupPeriodEnd: string
}

export interface SettingsTabDispatchProps {
    onSettingsChanged:  (newVal) => void
}

type SettingsTabFullProps = SettingsTabProps & SettingsTabDispatchProps & SettingsTabConnectProps & TodosTSTypes.ITabCommonConnectProps

export class SettingsTab extends React.Component<SettingsTabFullProps, TodosTSTypes.SettingsState> {
    constructor(props: SettingsTabFullProps) {
        super(props)
        this.state = {
            EncryptionSet: false,
            UserUnlocked: false,
            Password: "",
            LookupPeriodStart: Moment().add(-2, 'years').startOf('day').toDate(),
            LookupPeriodEnd: Moment().add(10, 'years').startOf('day').toDate()
        }
    }

    submitTodo = () => {
        // console.log('button1')
        this.props.onSettingsChanged(this.state)
    }

    public render(): JSX.Element {
        let passwordUI = <View style={styles.formGroupRow}>
            <View style={styles.formRowLabel}>
                <Text>Password</Text>
            </View>
            <View style={styles.formRowControl}>
                <TextInput
                    value={this.state.Password}
                    style={styles.input}
                    placeholder='Enter password?'
                    selectionColor='#666666'
                    onChangeText={ (text) => this.setState({Password : text})}
                />
            </View>
        </View>;

        return (
        <View style={{flex:1}}>
            <View style={styles.formGroup}>
                <View style={styles.formGroupRow}>
                    <View style={styles.formRowLabel}>
                        <Text>Enable Authentication</Text>
                    </View>
                    <View style={styles.formRowControl}>
                        <CheckBox checked={false} onChange={(chkd) => this.setState({EncryptionSet: chkd})} />
                    </View>
                </View>
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
            </View>
            <Button submitTodo={this.submitTodo} />
        </View>
        )
    }
}


const mapStateToProps = (state: TodosTSTypes.SettingsState /*, ownProps?: Props */): SettingsTabConnectProps => {
    const currentProps: SettingsTabConnectProps = Object.assign({}, this.props,  {
        EncryptionSet: state.EncryptionSet,
        UserUnlocked: state.UserUnlocked,
        LookupPeriodStart: state.LookupPeriodStart,
        LookupPeriodEnd: state.LookupPeriodEnd
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
