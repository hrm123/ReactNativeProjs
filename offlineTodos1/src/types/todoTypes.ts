
    export enum enumTaskType {
        General,
        Personal,
        Career
    }

    export enum enumRemindType {
        Time,
        Location
    }

    export interface TimeData {
        EventTime: Date
    }

    export interface LocationData {
        coords: any
    }

    export interface Todo {
        Task: string,
        taskType: enumTaskType,
        TaskId?: number,
        CreateTime: Date,
        UpdateTime?: Date,
        RemindType?: enumRemindType,
        RemindData?: TimeData | LocationData
    }

    export interface ITabCommonConnectProps {
        TaskTitle: string,
        maxTodoIndex: number
    }

    export interface TodosState  {
        pendingTodos: Todo[],
        completedTodos: Todo[],
        deletedTodos: Todo[],
        inputValue: string,
        maxTodoIndex: number
    }

    export interface SettingsState  {
        EncryptionSet: boolean,
        UserUnlocked: boolean,
        LookupPeriodStart: Date,
        LookupPeriodEnd: Date,
        Password: string,
        passwordError: string
    }
    export interface AppState  {
        todos: TodosState,
        settings: SettingsState
    }

    export type TodoModel = {
        todo: Todo,
        toggleComplete: (id: number) => void,
        deleteTodo: (id: number) => void,
        reopenTodo: (id: number) => void,
        key?: number
    }

    export type TodoListModel = {
        todos: Todo[],
        toggleComplete: (id: number) => void,
        deleteTodo: (id: number) => void,
        reopenTodo: (id: number) => void,
    }

    export type PressFn = (callbackParams: Array<string>) => void

    export type TodoButtonModel = {
        name: string,
        callback: PressFn,
        customCallbackData: Array<string>

    }

    export interface IInputProps {
        inputValue: string,
        inputChange: (val: string) => void

    }
