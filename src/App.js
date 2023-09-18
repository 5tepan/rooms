import React from "react"
import styles from  "./App.module.css"
import RoomsList from "./components/roomsList/RoomsList"

function App() {
    return (
        <div className={styles.app}>
            <RoomsList/>
        </div>
    )
}

export default App
