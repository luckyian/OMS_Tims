import React, { useEffect } from 'react'
import Calendar from 'react-calendar'

import Local from '../../utils/localStorage'
import API from '../../utils/API'

export default function OrderCalendar({ setDisplayedOrders }) {

    let allOrdersArr 

    // whenever the page renders get all the local order data
    useEffect(() => {
        console.log("setting allOrdersArr")
        allOrdersArr = Local.getOrderArr()
    })

    // checks the DB for orders of the date matching value; used if the local transaction fails
    function checkBDOrders(value){
        try{
            API.userLookUp().then(userInfo => {
                if(userInfo.order.length <= 0 || !userInfo.order){
                    setDisplayedOrders(false)
                }
                else{
                    setDisplayedOrders(userInfo.order.filter(order => order.date === value))
                }
            })
        }
        catch(e){
            console.log("Unable to retrieve any order information")
            setDisplayedOrders(false)
        }
    }

    // whenever the chalender is clicked this function tries to find orders on that date
    function handleOnChange(value, event){
        console.log(value, allOrdersArr)

        try{
            setDisplayedOrders(allOrdersArr.filter(order => order.date === value)) 
        }
        catch(e){
            console.log("Unable to retrieve orders locally", e)
            console.log("Trying to retrieve orders from database")
            checkBDOrders(value)
        }
    }

    return (            
        <Calendar 
            onChange={handleOnChange}
        />
    )
}
