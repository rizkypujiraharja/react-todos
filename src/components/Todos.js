import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ls from 'local-storage'
import TodoItem from './TodoItem'
import { removeTodo, markDoneTodo } from './../store'

const Todos = () => {
    const todos = useSelector(state => state.lists.todos)
    const dispatch = useDispatch()

    const deleteTodo = todoId => {
        dispatch(removeTodo(todoId))
    }
    const doneTodo = todoId => {
        dispatch(markDoneTodo(todoId))
    }
    return (
        <div className="list">
          {todos.map((todo, index) =>
            <TodoItem key={index} todo={todo} onDelete={deleteTodo} onDone={doneTodo}></TodoItem>
          )}
        </div>
    )
}

export default Todos