import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
const todosActions =  require('../actions/todosActions')
import * as Redux from 'redux'
import Calendar from 'react-native-calendar-datepicker'
import Moment from 'moment'

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
            LookupPeriodStart: Moment().add(-2, 'years').startOf('day').toDate(),
            LookupPeriodEnd: Moment().add(10, 'years').startOf('day').toDate()
        }
    }

    public render(): JSX.Element {
        return (
            <View>
                <Calendar
                    onChange={(date) => this.setState({LookupPeriodStart: date})}
                    selected={this.state.LookupPeriodStart}
                      minDate={Moment().add(-2, 'years').startOf('day')}
                      maxDate={Moment().add(10, 'years').startOf('day')}
                />
                <Calendar
                    onChange={(date) => this.setState({LookupPeriodEnd : date})}
                    selected={this.state.LookupPeriodEnd}
                    minDate={Moment().add(-2, 'years').startOf('day')}
                    maxDate={Moment().add(10, 'years').startOf('day')}
                />
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
