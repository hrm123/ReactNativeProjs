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
    LookupPeriod: Date
}

export interface SettingsTabDispatchProps {
    onSettingsChanged:  (newVal) => void
}

type SettingsTabFullProps = SettingsTabProps & SettingsTabDispatchProps & SettingsTabConnectProps & TodosTSTypes.ITabCommonConnectProps

export class SettingsTab extends React.Component<SettingsTabFullProps, any> {
    constructor(props: SettingsTabFullProps) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <View>
                <Calendar
                    onChange={(date) => this.setState({date})}
                    selected={this.state.date}
                      minDate={Moment().add(-2, 'years').startOf('day')}
                      maxDate={Moment().add(10, 'years').startOf('day')}
                />
            </View>
        )
    }
}


const mapStateToProps = (state: any /*, ownProps?: Props */): SettingsTabConnectProps => {
    const currentProps: SettingsTabConnectProps = Object.assign({}, this.props,  {
        pendingTodos: state.todos.pendingTodos,
        maxTodoIndex: state.todos.maxTodoIndex,
        TaskTitle: state.todos.inputValue
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
