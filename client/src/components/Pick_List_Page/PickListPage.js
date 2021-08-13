import React, { useState } from 'react'

import PickListCalendar from './PickListCalendar/PickListCalendar.js'

export default function PickListPage() {

    const [displayedOrders, setDisplayedOrders] = useState([])
    return (
        <div>
            <PickListCalendar setDisplayedOrders={setDisplayedOrders}/>
        </div>
    )
}
