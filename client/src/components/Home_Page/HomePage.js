import React, { useEffect, Modal, Alert }from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './HomePage.css'
import API from '../../utils/API'
import Local from "../../utils/localStorage"
import NavbarComponent from "../SharedComponents/Navbar.js"
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import ChipsBtn from './Chips_Btn/ChipsBtn.js'
import StoreBtn from './Store_Btn/StoreBtn.js'
import PickListBtn from './Pick_List_Btn/PickListBtn.js'
import OrderBtn from './Order_Btn/OrderBtn.js'

export default function HomePage() {

    const { currentUser } = useAuth()

    // sets up a local storage of user manipulated data and creates a new user if one doesn't exist
    useEffect(() => {

        // gets the user from the DB
        API.userLookUp(currentUser.uid).then(({ data }) => {

            // if the user doesn't exist make one
            if (!data) {
                API.newUserCreate(currentUser.uid)
                    .then((info) => {
                        Local.setStores(info.data.stores)
                        Local.setChipArr(info.data.chips)
                        Local.setOrderArr(info.data.orders)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {

                Local.setStores(data.stores)
                Local.setChipArr(data.chips)
                Local.setOrderArr(data.orders)

            }
        }).catch(err => {
            console.log(err)
        })
    }, [currentUser])

    return (
        <div>
        <NavbarComponent />
        <div id="home-page">
            
            <Container>
                <Row style={{ textAlign: "center" }}>
                    <Col >

                        <PickListBtn style={{ width: '100%' }} title="Pick List"   />
                        <OrderBtn style={{ width: '100%' }} title="Order" />
                        <ChipsBtn style={{ width: '100%' }} title="Chips" />
                        <StoreBtn style={{ width: '100%' }} title="Store" />
                       
                    </Col>
                </Row>
            </Container>
            
            </div>
        </div>
    )
}
