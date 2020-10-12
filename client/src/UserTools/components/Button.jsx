import React from 'react'
import style from '../css/Button.module.css'

function Button({label, clickEvent, uniqueStyle}) {
    return (
        <button className={`${style.button} ${style[uniqueStyle]}`} onClick={clickEvent}>
            {label}
        </button>
    )
}



export default Button