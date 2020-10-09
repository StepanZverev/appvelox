import React from 'react'
import classes from './Button.css'

const Button = props => {
    return (
        <button className={`${classes.Button} ${props.className}`}>
            {props.children}
        </button>
    )
}


export default Button