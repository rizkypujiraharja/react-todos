import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ls from 'local-storage'
import { v4 as uuidv4 } from 'uuid'

// Actions
export const addTodo = name => {
    return {
        type: "ADD_TODO",
        payload: name
    }
}

export const removeTodo = todoId => {
    return {
        type: "REMOVE_TODO",
        payload: todoId
    }
}

export const markDoneTodo = todoId => {
    return {
        type: "MARK_DONE_TODO",
        payload: todoId
    }
}

// Reducer
const initialState = {
    todos: ls.get('todos') || []
}
const todoReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_TODO":
            const newTodos = [...state.todos, {
                id: uuidv4(),
                name: payload,
                is_done: false
            }]
            ls.set('todos', newTodos)
            return {
                ...state, todos: newTodos
            }

        case "REMOVE_TODO":
            const removedTodos = state.todos.filter(todo => todo.id !== payload)
            ls.set('todos', removedTodos)
            return {
                ...state, todos: removedTodos
            }

        case "MARK_DONE_TODO":
            const markedDoneTodo = state.todos.map(todo => {
                (todo.id === payload) && (todo.is_done = true)
                return todo
            })
            ls.set('todos', markedDoneTodo)
            return {
                ...state, todos: markedDoneTodo
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    lists: todoReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store