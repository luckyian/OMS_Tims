import React, { useState, useEffect } from 'react'
import NavbarComponent from '../SharedComponents/Navbar.js'
import PickListCalendar from './PickListCalendar/PickListCalendar.js'

export default function PickListPage() {

    const [displayedOrders, setDisplayedOrders] = useState(["hello"])

    useEffect(() => {
        console.log(displayedOrders)
    }, [displayedOrders])
    
    return (
        <div>
            <NavbarComponent/>
            <PickListCalendar setDisplayedOrders={setDisplayedOrders}/>

            <div>{displayedOrders}</div>
        </div>
    )
}
