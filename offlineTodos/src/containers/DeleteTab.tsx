import React from 'react'
import * as Redux from 'redux'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
import TodoList from '../components/TodoList'
const todosActions =  require('../actions/todosActions')

export interface DeleteTabProps  {
}

export interface DeleteTabConnectProps {
  deletedTodos: TodosTSTypes.Todo[],
  maxTodoIndex: number,
}

export interface DeleteTabDispatchProps {
  onReopenTask: (todo: TodosTSTypes.Todo) => void,
  onTitleChanged: (newVal: string) => void
}

type DeleteTabFullProps = DeleteTabProps & DeleteTabDispatchProps & DeleteTabConnectProps

class DeleteTab extends React.Component<DeleteTabFullProps, any> {
  constructor(props: DeleteTabFullProps) {
    super(props)
  }

  reopenTask = (taskId) => {
    const { deletedTodos : todosList } = this.props
    const currentTodo = todosList.filter((td) => td.TaskId === taskId)
    if (currentTodo && currentTodo.length === 1) {
      this.props.onReopenTask(currentTodo[0])
    }
  }

  public render(): JSX.Element {
    const todosListModel: TodosTSTypes.TodoListModel  = {
      todos : this.props.deletedTodos,
      deleteTodo: undefined,
      toggleComplete : undefined,
      reopenTodo: this.reopenTask
    }
    return (
        <View>
          <TodoList {...todosListModel} />
        </View>
    )
  }
}

const mapStateToProps = (state: TodosTSTypes.TodosState /*, ownProps?: Props */): DeleteTabConnectProps => {
  const currentProps: DeleteTabConnectProps = Object.assign(this.props,  {
    deletedTodos: state.deletedTodos,
    maxTodoIndex: state.maxTodoIndex
  })
  return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DeleteTabDispatchProps => {
  return {
    onTitleChanged:  (newVal) => {
      dispatch(todosActions.titleChanged(newVal))
    },
      onReopenTask: (todo) => {
      dispatch(todosActions.deleteTodos(todo))
    }
  }
}

export const DeleteTabContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteTab)