import React from 'react'

import styles from './ReservedBlock.module.css'

const ReservedBlock = () => {
    return (
        <div className={styles.reservedBlock}>
            <span className={styles.reserved}>Номер зарезервирован</span>
            <span className={styles.toPayment}>Перейти к </span>
        </div>
    )
}

export default ReservedBlock