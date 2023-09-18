import React from 'react'
import Button from "../../ui/button/Button"

import styles from './PriceBlock.module.css'

const PriceBlock = ({price, currency, priceIn, onChange}) => {
    const handleClick = (e) => {
        e.stopPropagation()
        onChange()
    }

    return (
        <div className={styles.priceInfoBlock}>
            <div className={styles.priceTitle}>
                <p className={styles.priceFor}>
                    {priceIn}
                </p>
                <div className={styles.priceBlock}>
                    <h4 className={styles.fromPrice}>
                        от
                    </h4>
                    <h3 className={styles.price}>
                        {price}
                    </h3>
                    <span className={styles.currency}>
                        {currency}
                    </span>
                </div>
            </div>
            <Button onClick={handleClick}/>
        </div>
    )
}

export default PriceBlock