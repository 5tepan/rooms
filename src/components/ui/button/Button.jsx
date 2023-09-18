import React from 'react'

import styles from './Button.module.css'

const Button = ({onClick}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            Забронировать
        </button>
    )
}

export default Button