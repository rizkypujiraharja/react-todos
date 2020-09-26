import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const TodoItem = ({todo, onDelete}) => {
    const deleteTodo = () => {
        onDelete(todo.id)
    }

    return (
        <div style={todoStyle}>
            <p>{todo.name}</p>
            <div>
                <Button label="Edit" color="warning" />
                <Button label="Delete" color="danger" action={deleteTodo} />
            </div>
        </div>
    )
}

export default TodoItem

const todoStyle = {
    background: '#abc4ff',
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