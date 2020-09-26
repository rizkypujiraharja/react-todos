import React from 'react'
import Button from './Button'

const TodoItem = ({todo}) => {
    return (
        <div style={todoStyle}>
            <p>{todo}</p>
            <div>
                <Button label="Edit" color="warning"/>
                <Button label="Delete" color="danger" />
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