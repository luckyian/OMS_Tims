import React from 'react'
import './HomePage.css'
import PickListBtn from './Pick_List_Btn/PickListBtn.js'
import OrderBtn from './Order_Btn/OrderBtn.js'

export default function HomePage() {
    return (
        <div id="home-page">
            <PickListBtn />
            <OrderBtn />
        </div>
    )
}
