import React from 'react'
import Button from './Button'
import './../FormInput.css'

class FormInput extends React.Component {
    state = {
        text:""
    }

    onChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    saveTodo = () => {
        this.props.save(this.state.text)
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <div style={formStyle}>
                <input type="text" style={inputStyle} value={this.state.text} placeholder="Add todo" onChange={this.onChange} />
                <Button label="Save" color="primary" action={this.saveTodo} />
            </div>
        )
    }
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