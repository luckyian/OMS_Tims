import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Accordion, Row, Col, Card, Button, Alert } from 'react-bootstrap'
// import AddOrder from '../chipsSubComps/modals/AddOrderModal'
import Local from '../../utils/localStorage'

// components that get rendered
import NavbarComponent from '../SharedComponents/Navbar'
import AddChipsModal from './Add_Chip_Modal/AddChipModal.js'
import DeleteChipModal from './Delete_Chip_Modal/DeleteChipModal.js'
import AddChipBtn from './Add_Chip_Btn/AddChipBtn.js'
import RemoveChipBtn from './Remove_Chip_Btn/RemoveChipBtn.js'
// import SelectStoreDropDown from './Select_Store_DropDown/SelectStoreDropDown.js'
import StoreChipsDisplay from './Store_Chips_Display/StoreChipsDisplay.js'
import SelectStoreDropDown from '../Select_Store_DropDown/SelectStoreDropDown.js'


export default function Store() {

    // const { currentUser } = useAuth()
    const [selectedStore, setSelectedStore] = useState(false)
    const [showChipsModal, setShowChipsModal] = useState(false)
    // const [showDoseModal, setShowDoseModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState(false)
    // const [reconnect, setReconnect] = useState(false)

    const chipsArr = Local.getChipArr()

    // const handleShowDoseModal = () => {
    //     if (chipsArr.length > 0) {
    //         setError('')
    //         setShowDoseModal(true);
    //     } else {
    //         setError("Add a chip to add a dose")
    //     }
    // }

    // window.addEventListener('online', () => {
    //     if (error === "No connection found.  Data will be stored when connection is reestablished.") {
    //         setError('')
    //         setReconnect("Connection Reestablished")
    //     }
    // })
    return (
        <div>
            <NavbarComponent />
            {/* <Container className="justify-content-around align-items-center">
                {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
                {reconnect && <Alert variant="success" className="mt-2">{reconnect}</Alert>}
                <br />
            </Container> */}

            <SelectStoreDropDown setSelectedStore={setSelectedStore}></SelectStoreDropDown>

            <AddChipsModal show={showChipsModal} setShow={setShowChipsModal} setChipError={setError} />
            {/* <AddOrder show={showDoseModal} setShow={setShowDoseModal} setChipError={setError} /> */}
            <DeleteChipModal show={showDeleteModal} setShow={setShowDeleteModal} setChipError={setError} selectedStore={selectedStore}/>

            {/* if a store has been selected than allow the btns to be used and display chips*/}
            {selectedStore && (
                <>
                    <StoreChipsDisplay chips={selectedStore.chips}/>
                    <AddChipBtn setShowChipsModal={setShowChipsModal}/>
                    <RemoveChipBtn 
                    setShowDeleteModal={setShowDeleteModal} 
                    selectedStore={selectedStore}
                    setError={setError}
                    />
                </>
            )}

        </div>
    )
}
