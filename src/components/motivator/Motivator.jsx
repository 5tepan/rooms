import React from 'react'
import MotivatorIcon from "../../icons/MotivatorIcon"

import styles from './Motivator.module.css'

const Motivator = () => {
    return (
        <div className={styles.motivatorBlock}>
            <div className={styles.motivator}>
                Гарантия лучшей цены!
            </div>
            <MotivatorIcon/>
        </div>
    )
}

export default Motivator