import React from 'react'
import './StoreBtn.css'
import { useHistory } from 'react-router-dom'


export default function StoreBtn() {
    const history = useHistory()

    return (
        <button id="store-list"  onClick={() => history.push("/stores")}>
            Stores
        </button>
    )
}
