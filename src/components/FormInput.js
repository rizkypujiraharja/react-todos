import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import './FormInput.css'
import { addTodo } from './../store/actions/todo'

const FormInput = () => {
    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const onChange = event => {
        setText(event.target.value)
    }

    const saveTodo = () => {
        dispatch(addTodo(text))
        setText("")
    }

    return (
        <div style={formStyle}>
            <input type="text" style={inputStyle} value={text} placeholder="Add todo" onChange={onChange} />
            <Button label="Save" color="primary" action={saveTodo} />
        </div>
    )
}

export default FormInput

const formStyle = {
    background: '#d7e3fc',
    height: '3rem',
    padding: '0 1rem',
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const inputStyle = {
    background: '#d7e3fc',
    width: '80%',
    border: 'none',
    height: '80%',
}