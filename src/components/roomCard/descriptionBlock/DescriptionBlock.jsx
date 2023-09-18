import React from 'react'

import styles from './DescriptionBlock.module.css'

const DescriptionBlock = ({roomName, roomDescription}) => {
    return (
        <div className={styles.descriptionBlock}>
            <h3 className={styles.title}>
                {roomName}
            </h3>
            <span className={styles.description}>
                {roomDescription}
            </span>
        </div>
    )
}

export default DescriptionBlock