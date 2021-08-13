import React from 'react'
import Calendar from 'react-calendar'

import Local from '../../../utils/localStorage'

export default function PickListCalendar({ setDisplayedOrders }) {

    let allOrdersArr

    useEffect(() => {
        allOrdersArr = Local.getOrderArr()
    }, [])

    handleOnChange(value, event){
        setDisplayedOrders(allOrdersArr.filter(order => order.date === value))
    }

    return (
        <Calendar 
            onChange={handleOnChange}
        />
    )
}
