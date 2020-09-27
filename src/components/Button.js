import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = ({ label, color, action }) => {
    const doAction = () => {
        action()
    }

    return (
        <button className={`btn btn-${color}`} onClick={doAction}>{label}</button>
    )
}

export default Button

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    action: PropTypes.func
}

Button.defaultProps = {
    action: () => { }
};