import React from 'react'
import { mount, shallow } from 'enzyme'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import Todo from '../components/Todo'
import TodoButton from '../components/TodoButton'
import * as TodosTsTypes from '../types/todoTypes'

let global: any

describe('>>>T O D O S COMPONENT -- tests', () => {
    let wrapper
    let fn2 = jest.fn()  // (taskId: number) => { console.log(taskId)}
    let onPress: TodosTsTypes.PressFn = (cbParams: Array<string>) => { console.log(cbParams)}
    let todoModel: TodosTsTypes.TodoModel = {
        deleteTodo: fn2,
        toggleComplete: fn2,
        reopenTodo : fn2,
        key: 1,
        todo: {
            Task: 'todo1',
            TaskId: 1,
            taskType: TodosTsTypes.enumTaskType.General,
            CreateTime: undefined
        }
    }
    beforeEach(() => {
      let jsdom = require('jsdom').jsdom
      global.document = jsdom('')
        global.window = global.document.parentWindow
      // global.window = document.defaultView
      global.mount = mount
      // global.render = render
      global.shallow = shallow
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          global[property] = document.defaultView[property]
        }
      })

      wrapper = shallow(<Todo {...todoModel} />)
    })

    it('should render a Todo component', () => {
        //console.log(wrapper)
        //console.log(wrapper.render())
        expect(wrapper.contains(
            <Text >
                todo1
            </Text>
        )).toBe(true)
    })

    it('should render a Todo component using SnapShots', () => {
        expect(renderer.create(
          <Todo {...todoModel} />
        )).toMatchSnapshot()
    })

    describe('Todo component button tests', () => {
        it('Todo component button render', () => {
            let todoButtons = wrapper.find(TodoButton)
            expect(todoButtons).toHaveLength(2)
            //console.log(todoButtons)
            //console.log(todoButtons.first().props())
            let cbParams1: Array<string> = ["1"]
            let doneButtonState: TodosTsTypes.TodoButtonModel = {name: 'Done', callback: onPress, customCallbackData: cbParams1}
            let cbParams2: Array<string> = ["2"]
            let deleteButtonState: TodosTsTypes.TodoButtonModel = {name: 'Delete', callback: onPress, customCallbackData: cbParams2}
            expect(todoButtons.first().props().name).toEqual(doneButtonState.name)
            expect(todoButtons.at(1).props().name).toEqual(deleteButtonState.name)
            //expect(todoButtons.at(1).props().onPress.getClass().equals(onPress.getClass())).toBeTruthy()

        })
        it('Todo component button click', () => {
            let todoButtons = wrapper.find(TodoButton)
            expect(todoButtons).toHaveLength(2)
            //console.log(todoButtons)
            //console.log(todoButtons.first().props())
            let doneButton = todoButtons.first()
            doneButton.simulate('press')
            expect(fn2).toHaveBeenCalled()
            expect(fn2).toHaveBeenCalledWith(todoModel.key)

        })
    })

    xit('should render a TodoList container', () => {
        let todoListObj = wrapper.find('TodoList')
        expect(todoListObj).toBeDefined()
        let todoObj = todoListObj.find('Todo')
        expect(todoObj).toBeDefined()
        //console.log(todoObj)
        //let todoTxt = todoObj.find('Text')
        //console.log(todoTxt.debug())
        //console.log(wrapper.debug())
        //console.log(wrapper.render())
        //console.log(todoTxt.Children())
        //    expect(todoTxt.find('textinput')).toEqual("What needs to be done?")
    })
})