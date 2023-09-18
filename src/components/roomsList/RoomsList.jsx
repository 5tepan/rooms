import React from 'react'
import RoomCard from "../roomCard/RoomCard"

import styles from './RoomsList.module.css'

import room1 from '../../images/Pic.png'
import room2 from '../../images/Pic1.png'
import room3 from '../../images/Pic2.png'

const roomsList = [
    {
        id: 1,
        image: room1,
        alt: 'Номер представительский люкс',
        name: 'Представительский люкс',
        description: 'Эксклюзивный номер с панорамным видом на центр города Москвы',
        priceFor: 'Цена за сутки',
        price: '7 900',
        currency: '₽',
        isMotivatorActive: false,
        isAvailable: true
    },
    {
        id: 2,
        image: room2,
        alt: 'Номер дуплекс',
        name: 'Дуплекс',
        description: 'Просторный двухкомнатный номер с шикарным видом на парк',
        priceFor: 'Цена за сутки',
        price: '5 700',
        currency: '₽',
        isMotivatorActive: true,
        isAvailable: true
    },
    {
        id: 3,
        image: room3,
        alt: 'Номер бизнес-люкс',
        name: 'Бизнес-люкс',
        description: 'Трехкомнатный номер с панорамным видом на Москва-реку',
        priceFor: 'Цена за сутки',
        price: '4 900',
        currency: '₽',
        isMotivatorActive: false,
        isAvailable: true
    }
]

const RoomsList = () => {
    return (
        <div className={styles.roomsListBlock}>
            <h1 className={styles.title}>НОМЕРА И ЦЕНЫ</h1>
            <div className={styles.roomsPosition}>
                {
                    roomsList.map(room =>
                        <RoomCard
                            key={room.id}
                            image={room.image}
                            alt={room.alt}
                            roomName={room.name}
                            roomDescription={room.description}
                            price={room.price}
                            currency={room.currency}
                            priceFor={room.priceFor}
                            isMotivatorActive={room.isMotivatorActive}
                            isAvailable={room.isAvailable}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default RoomsList