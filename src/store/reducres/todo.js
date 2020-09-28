import ls from 'local-storage'
import { v4 as uuidv4 } from 'uuid'

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

export default todoReducer