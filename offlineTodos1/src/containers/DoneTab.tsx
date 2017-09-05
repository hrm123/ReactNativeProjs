import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
import TodoList from '../components/TodoList'
const todosActions =  require('../actions/todosActions')
import * as Redux from 'redux'

export interface DoneTabProps  {
}

export interface DoneTabConnectProps {
  completedTodos: TodosTSTypes.Todo[],
  maxTodoIndex: number,
    TaskTitle: string
}

export interface DoneTabDispatchProps {
  onTitleChanged:  (newVal) => void
}

type DoneTabFullProps = DoneTabProps & DoneTabDispatchProps & DoneTabConnectProps & TodosTSTypes.ITabCommonConnectProps

export class DoneTab extends React.Component<DoneTabFullProps, any> {
  constructor(props: DoneTabFullProps) {
    super(props)
  }

  public render(): JSX.Element {
    const todosListModel: TodosTSTypes.TodoListModel  = {
      todos : this.props.completedTodos,
      toggleComplete : undefined,
      deleteTodo : undefined,
      reopenTodo: undefined
    }
    return (
        <View>
          <TodoList {...todosListModel} />
        </View>
    )
  }
}

const mapStateToProps = (state: any /*, ownProps?: Props */): DoneTabConnectProps => {
  const currentProps: DoneTabConnectProps = Object.assign({}, this.props,  {
    completedTodos: state.todos.completedTodos,
    maxTodoIndex: state.todos.maxTodoIndex,
      TaskTitle: state.todos.inputValue
  })
  return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DoneTabDispatchProps => {
  return {
    onTitleChanged:  (newVal) => {
      dispatch(todosActions.titleChanged(newVal))
    }
  }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(DoneTab)

/*
export default class ThirdTab extends React.Component<any,any> {
  render() {
    return (
        <View>
          <Text>Tab Page #3</Text>
        </View>
    )
  }
}
    */