import React, { useRef, useState } from 'react'
import { Button, Form, Modal, Alert } from 'react-bootstrap'
import Local from '../../../utils/localStorage'
import API from '../../../utils/API'
import { useAuth } from '../../../contexts/AuthContext'
import chips from '../../../../src/reference/chips.json'
// chipNameRef = medNameRef
// potentialChips = potentialMeds

export default function ChipsModal(props) {

    const [needText, setNeedText] = useState()
    const [modalError, setModalError] = useState()
    const [chipsToAdd, setChipsToAdd] = useState(false)
    const chipNameRef = useRef()
    const skuRef = useRef()

    // this was used to enter in unlisted meds
    const otherNameRef = useRef()

    const { currentUser } = useAuth()
    let potentialChips = chips
//     possibleChips.map((chip) =>
//     <ul id="chipList">{chip.name} // sku: {chip.sku}</ul>
//   );

   

    const handleClose = () => {
        props.setShow(false)
    }

    // lets the user know that they need to put in a valid chip
    // function needTextBox() {
    //     if(chipNameRef.current.value === "Other") {
    //         setNeedText(true)
    //     } else {
    //         setModalError('')
    //         setNeedText(false)
    //     }
    // }

    function handleAddChip() {

        // this was used to check if a non named item was entered and no blank names were added
        if(needText && otherNameRef.current.value === "") {
            return setModalError("Chip must have a name")
        }

        // creates an object that stores the new data
        // cases value needs to be incorperated into the form
        const payload = {
            id: currentUser.uid,
            chip: {
                name: chipNameRef.current.value,
                sku: skuRef.current.value,
                cases:[]
            }
        }

        //adding the new data to the DB and updating local storage
        API.addNewChip(payload )
            // on a success add the data to local storage and close the modal
            .then(({data}) => {
                Local.setChipsArr(data.chips)
                handleClose()
            })
            // if an error occurs when adding the data to the DB:
            // log the error
            // save the transaction to local storage to be completed once connection is re established
            // push the new data to local storage to be used until it can be presisted in the DB
            .catch(err => {
                console.log(err)
                API.saveTransaction({
                    apiName: "addNewChip",
                    payload: payload
                })
                let tempArr = Local.getChipsArr()
                tempArr.push(payload.chip)
                Local.setChipsArr(tempArr)
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
            <Modal.Title>Add Chips</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalError && <Alert variant="danger">{modalError}</Alert>}
            <Form>
                <Form.Group>
                    <Form.Label>Chip Name</Form.Label>
                    <Form.Control as="select" ref={chipNameRef} >
                        {potentialChips.map(chip => (<option key={chip.name && chip.sku}>{chip.name} Sku:{chip.sku}</option>))}
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>

               
            </Form>
            {/* if there are multiple chips being added then display those chips here */}
            {chipsToAdd && (
                <div>
                    <h4>Chips List</h4>
                    <div>
                        {chipsToAdd.map((chip) => 
                            <li key={chip.name}>
                                {chip.name}
                            </li>
                        )}
                    </div>
                </div>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            {/* Something to add multiple chips in one modal later */}
            {/* <Button variant="primary" onClick={handleMultipleChipAdd}>Add Another</Button> */}
            <Button variant="primary" onClick={handleAddChip}>Add</Button>
        </Modal.Footer>
        </Modal>

    )
}