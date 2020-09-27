import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const TodoItem = ({todo, onDelete, onDone}) => {
    const deleteTodo = () => {
        onDelete(todo.id)
    }
    const doneTodo = () => {
        onDone(todo.id)
    }

    return (
        <div style={todoStyle}>
            <p style={todo.is_done ? isDone : {}}>{todo.name}</p>
            <div>
                {
                    !todo.is_done &&
                        <Button label="Done" color="success" action={doneTodo} />
                }
                <Button label="Delete" color="danger" action={deleteTodo} />
            </div>
        </div>
    )
}

export default TodoItem

const isDone = {
    textDecoration: 'line-through'
}

const todoStyle = {
    background: '#b6ccfe',
    height: '3rem',
    padding: '0 1rem',
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}