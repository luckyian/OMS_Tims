import React, { useRef, useState } from 'react'
import { Button, Form, Modal, Alert } from 'react-bootstrap'
import Local from '../../../utils/localStorage'
import API from '../../../utils/API'
import { useAuth } from '../../../contexts/AuthContext'

export default function DeleteChipModal(props) {

    const [modalError, setModalError] = useState()
    const chipNameRef = useRef()
    const { currentUser } = useAuth()

    const handleClose = () => {
        props.setShow(false)
    }

    function handleDeleteChip() {

        const payload = {
            id: currentUser.uid, 
            chip: chipNameRef.current.value
        }

        API.removeChip(payload)
        .then(({data}) => {
            Local.setChipsArr(data.chips)
            handleClose()
        })
        .catch(err => {
            console.log(err)
            setModalError("unable to delete chip")
            API.saveTransaction({
                apiName: 'removeChip',
                payload: payload
            })
            Local.setChipsArr((Local.getChipsArr()).filter(chip => chip.name !== payload.chip))
            handleClose()
            props.setChipError("No connection found.  Data will be stored when connection is reestablished.")
        })  
    }

    return (

        <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title>Add New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalError && <Alert variant="danger">{modalError}</Alert>}
        {props.selectedStore.chips && 
            <Form>
                <Form.Group>
                    <Form.Label>Chip Name</Form.Label>
                    <Form.Control as="select" ref={chipNameRef}>
                        {props.selectedStore.chips.map(chip => (<option>{chip.name}</option>))}
                    </Form.Control>
                </Form.Group>
            </Form>
        }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={handleDeleteChip}>Delete</Button>
        </Modal.Footer>
        </Modal>

    )
}