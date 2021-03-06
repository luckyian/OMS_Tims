import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Accordion, Row, Col, Card, Button, Alert } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import ChipsModal from './Stores_Page/Add_Chip_Modal/AddChipModal'
import AddOrder from './chipsSubComps/modals/AddOrderModal'
import DeleteChipModal from './Stores_Page/Delete_Chip_Modal/DeleteChipModal'
import Local from '../utils/localStorage'
import chips from '../reference/chips.json'
import ShowChipList from './chipsSubComps/ShowChipsList'
// import FooterComp from './SharedComponents/Footer'
// import LineChart from './chipsSubComps/testchipChart'

// import AddChipBtn from './'


export default function Chip() {

    // const { currentUser } = useAuth()
    const [showChipsModal, setShowChipsModal] = useState(false);
    const [showDoseModal, setShowDoseModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState(false)
    const [reconnect, setReconnect] = useState(false)
    var chips = []
    const chipsArr = Local.getChipArr()

    const handleShowChipsModal = () => setShowChipsModal(true);
    const handleShowDoseModal = () => {
        if (chipsArr.length > 0) {
            setError('')
            setShowDoseModal(true);
        } else {
            setError("Add a chip to add a dose")
        }
    }
    const handleShowDeleteModal = () => {
        if (chipsArr.length > 0) {
            setError('')
            setShowDeleteModal(true);
        } else {
            setError("No chips to Delete")

        }
    }

    window.addEventListener('online', () => {
        if (error === "No connection found.  Data will be stored when connection is reestablished.") {
            setError('')
            setReconnect("Connection Reestablished")
        }
    })
    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
                {reconnect && <Alert variant="success" className="mt-2">{reconnect}</Alert>}
                <br />

                <Container>
                <ShowChipList/>
                </Container>


            </Container>
            {/* <FooterComp /> */}
            <ChipsModal show={showChipsModal} setShow={setShowChipsModal} setChipError={setError} />
            {/* <AddOrder show={showDoseModal} setShow={setShowDoseModal} setChipError={setError} /> */}
            {/* <DeleteChipModal show={showDeleteModal} setShow={setShowDeleteModal} setChipError={setError} selectedStore={selectedStore} /> */}

        </div>
    )
}
