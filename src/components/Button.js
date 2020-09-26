import React from 'react'
import '../Button.css'

const Button = ({label, color}) => {
    return (
        <button className={`btn btn-${color}`}>{label}</button>
    )
}

export default Button