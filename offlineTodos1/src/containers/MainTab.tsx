import React from 'react'
import * as Redux from 'redux'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import * as TodosTSTypes from '../types/todoTypes'
import TodoList from '../components/TodoList'
const todosActions =  require('../actions/todosActions')
import TodoInput from '../components/Input';
import TodoButton from '../components/Button';

export interface MainTabProps  {
}

export interface MainTabConnectProps {
    pendingTodos: TodosTSTypes.Todo[]
}

export interface MainTabDispatchProps {
    onSubmitClick: (todo: TodosTSTypes.Todo) => void,
    onDeleteTask: (todo: TodosTSTypes.Todo) => void,
    onTitleChanged: (newVal: string) => void,
    onTaskCompleted: (todo: TodosTSTypes.Todo) => void
}

type MainTabFullProps = MainTabProps & MainTabDispatchProps & MainTabConnectProps & TodosTSTypes.ITabCommonConnectProps

export class MainTab extends React.Component<MainTabFullProps, any> {
  constructor(props: MainTabFullProps) {
      super(props)
  }

  deleteTask = (taskId) => {
    const { pendingTodos : todosList } = this.props
    const currentTodo = todosList.filter((td) => td.TaskId === taskId)
    if (currentTodo && currentTodo.length === 1) {
        this.props.onDeleteTask(currentTodo[0])
    }
  }

  toggleComplete = (taskId) => {
    const { pendingTodos : todosList } = this.props
    const currentTodo = todosList.filter((td) => td.TaskId === taskId)
    if (currentTodo && currentTodo.length === 1) {
        this.props.onTaskCompleted(currentTodo[0])
    }
  }

    inputChange = (nv) => {
        this.props.onTitleChanged(nv);
    }

    submitTodo = () => {
        if(this.props.TaskTitle.match(/^\s*$/)){
            return;
        }
        let todo: TodosTSTypes.Todo = {
            "Task": this.props.TaskTitle,
            "taskType": TodosTSTypes.enumTaskType.General,
            "TaskId": -1, // will be updated in the action method
            CreateTime: new Date()

        }
        this.props.onSubmitClick(todo);
    }

  public render(): JSX.Element {
    const todosListModel: TodosTSTypes.TodoListModel  = {
      todos : this.props.pendingTodos,
      toggleComplete: this.toggleComplete,
      deleteTodo: this.deleteTask,
        reopenTodo: undefined
    }
    return (
        <View style={{flex: 1,flexDirection: 'column'}}>
            <ScrollView keyboardShouldPersistTaps="handled" >
                <TodoInput
                    inputValue={this.props.TaskTitle}
                    inputChange={this.inputChange}
                />
              <View>
                <TodoList {...todosListModel} />
              </View>
                <TodoButton submitTodo={this.submitTodo} />
            </ScrollView>
        </View>
    )
  }
}

const mapStateToProps = (state: any /*, ownProps?: Props */): MainTabConnectProps => {
    debugger;
    const currentProps: MainTabConnectProps = Object.assign({}, this.props,  {
        pendingTodos: state.todos.pendingTodos,
        maxTodoIndex: state.todos.maxTodoIndex
    })
  return currentProps
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): MainTabDispatchProps => {
  return {
      onSubmitClick: (todo) => {
          // console.log('in onSubmitClick')
          dispatch(todosActions.addTodos(todo))
      },
      onTitleChanged:  (newVal) => {
          dispatch(todosActions.titleChanged(newVal))
      },
      onTaskCompleted: (todo) => {
          dispatch(todosActions.completeTodos(todo))
      },
      onDeleteTask: (todo) => {
          dispatch(todosActions.deleteTodos(todo))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTab)

/*
export default class FirstTab extends React.Component<any,any> {
    render() {
        return (
            <View>
                <Text>Tab Page #1</Text>
            </View>
        )
    }
}
*/
