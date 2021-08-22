import React, { useState, useEffect } from 'react'

import PickListCalendar from './PickListCalendar/PickListCalendar.js'

export default function PickListPage() {

    const [displayedOrders, setDisplayedOrders] = useState(["hello"])

    useEffect(() => {
        console.log(displayedOrders)
    }, [displayedOrders])
    
    return (
        <div>
            <PickListCalendar setDisplayedOrders={setDisplayedOrders}/>

            <div>{displayedOrders}</div>
        </div>
    )
}
