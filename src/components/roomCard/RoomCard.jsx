import React, {useState} from 'react'
import DescriptionBlock from "./descriptionBlock/DescriptionBlock"
import PriceBlock from "./priceBlock/PriceBlock"
import Motivator from "../motivator/Motivator"
import ReservedBlock from "./reservedBlock/ReservedBlock"

import styles from './RoomCard.module.css'

const RoomCard = ({
        image,
        roomName,
        roomDescription,
        price,
        currency,
        priceFor,
        isMotivatorActive,
        isAvailable,
        alt
    }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isBooked, setIsBooked] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)

        if (clicked) {
            setIsBooked(true)
            setClicked(false)
        }
    }

    const handleBooked = () => {
        setClicked(true)
    }

    const handleUnBooked = () => {
        setIsBooked(false)
    }

    return (
        <div
            className={styles.roomCardBlock}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleUnBooked}
        >
            <div
                className={ !isBooked
                    ? styles.gradientOverlay
                    : styles.gradientOverlayReserved
                }
            >
            </div>
            <div className={styles.roomCardContent}>
                <div className={styles.motivatorContainer}>
                    {isMotivatorActive && isHovered && !isBooked
                        ? <Motivator/>
                        : undefined
                    }
                </div>
                <DescriptionBlock
                    roomName={roomName}
                    roomDescription={roomDescription}
                />
                {!isBooked && isAvailable
                    ? <>
                        <hr className={styles.separationLine}/>
                        <PriceBlock
                            price={price}
                            currency={currency}
                            priceIn={priceFor}
                            onChange={handleBooked}
                        />
                    </>
                    : <ReservedBlock/>
                }
            </div>
            <img
                className={styles.roomCardImage}
                src={image}
                alt={alt}
            />
        </div>
    )
}

export default RoomCard