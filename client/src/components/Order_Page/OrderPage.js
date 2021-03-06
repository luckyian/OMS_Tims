import React, { useState } from 'react'

// other components
import OrderNameInput from './Order_Name_Input/OrderNameInput.js'
import AddStoreBtn from './Add_Store_Btn/AddStoreBtn.js'
import CancelOrderBtn from './Cancel_Order_Btn/CancelOrderBtn.js'
import SaveOrderBtn from './Save_Order_Btn/SaveOrderBtn.js'
import NavbarComponent from '../SharedComponents/Navbar.js'
import OrderCalendar from './OrderCalendar.js'
// 

export default function OrderPage() {

    const [cards, setCards] = useState()

    return (
        <div>
            <NavbarComponent/>
            <OrderCalendar/>
            <OrderNameInput/>

            <AddStoreBtn setCards={setCards} cards={cards}/>
            <div>
                <SaveOrderBtn/>
                <CancelOrderBtn/>
            </div>
        </div>
    )
}
