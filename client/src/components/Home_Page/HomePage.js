import React, { useEffect }from 'react'
import { useAuth } from '../contexts/AuthContext'
import './HomePage.css'

import PickListBtn from './Pick_List_Btn/PickListBtn.js'
import OrderBtn from './Order_Btn/OrderBtn.js'

export default function HomePage() {

    const { currentUser } = useAuth()

    useEffect(() => {

        API.userLookUp(currentUser.uid).then(({ data }) => {

            if (!data) {

                API.newUserCreate(currentUser.uid)
                    .then((info) => {

                        Local.setTestsArr(info.data.tests)
                        Local.setMedsArr(info.data.meds)

                        getLastBS()
                        avgBloodS()
                        a1Cfunct()
                        backGround()


                    })
                    .catch(err => {
                        console.log(err)
                        // setError('Unable to create new account')
                    })
            } else {

                Local.setTestsArr(data.tests)
                Local.setMedsArr(data.meds)

                getLastBS()
                avgBloodS()
                a1Cfunct()
                backGround()



            }
        }).catch(err => {
            console.log(err)
            getLastBS()
            avgBloodS()
            a1Cfunct()
            backGround()

        })
    }, [currentUser])

    return (
        <div id="home-page">
            <PickListBtn />
            <OrderBtn />
        </div>
    )
}
