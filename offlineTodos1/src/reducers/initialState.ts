
import * as TodosTsTypes from '../types/todoTypes'
import Moment from 'moment'
const initialTodos: TodosTsTypes.Todo[] = [
    {
        CreateTime: undefined,
        RemindType: TodosTsTypes.enumRemindType.Time,
        RemindData: { EventTime: undefined },
        Task: 'task1',
        TaskId: 1,
        taskType:  TodosTsTypes.enumTaskType.General
    },
    {
        Task: 'task2',
        CreateTime: undefined,
        TaskId: 2,
        taskType: TodosTsTypes.enumTaskType.Personal,
        RemindType: TodosTsTypes.enumRemindType.Location,
        RemindData: { EventTime: undefined }
    }
]
const initialTodosState: TodosTsTypes.TodosState = {
    pendingTodos: initialTodos,
    completedTodos: [],
    deletedTodos: [],
    inputValue: 'My first todo',
    maxTodoIndex: 2
}
const initialSettings: TodosTsTypes.SettingsState ={
     UserUnlocked: false,
    EncryptionSet: false,
    LookupPeriodStart : Moment().add(-2, 'years').startOf('day').toDate(), // .format("MM/DD/YYYY"),
    LookupPeriodEnd : Moment().add(-2, 'years').startOf('day').toDate(),
    Password: ""
}
const initialState: TodosTsTypes.AppState =  {
    todos: initialTodosState,
    settings: initialSettings
}


export default initialState
