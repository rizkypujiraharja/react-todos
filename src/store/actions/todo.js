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