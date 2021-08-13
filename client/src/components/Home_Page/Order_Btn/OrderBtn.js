import React from 'react'
import { useHistory } from 'react-router-dom'

import './OrderBtn.css'

export default function OrderBtn() {

    const history = useHistory()

    return (
        <button id="order" onClick={() => history.push("/")}>
            Order
        </button>
    )
}
