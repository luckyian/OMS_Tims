import React, { useRef, useState } from 'react'
import { Button, Form, Modal, Alert } from 'react-bootstrap'
import Local from '../../../utils/localStorage'
import API from '../../../utils/API'
import { useAuth } from '../../../contexts/AuthContext'

export default function MedsModal(props) {

    const [needText, setNeedText] = useState()
    const [modalError, setModalError] = useState()
    const medNameRef = useRef()
    const typeRef = useRef()
    const otherNameRef = useRef()
    const { currentUser } = useAuth()
    

    const potentialMeds = [
        "2oz Original",
        "2oz Jalapeno",
        "2oz SC&O",
        "2oz SS&V",
        "2oz Haw Maui Onion",
        "2oz Haw Luau BBQ",
        "5oz Original",
        "5oz Jalapeno",
        "5oz SS&V",
        "5oz Haw Mango Habanero",
        "5oz Haw Maui Onion",
        "5oz Haw Luau BBQ",
        "7.5oz Vlasic Dill Pickle",
        "7.5oz Honey BBQ",
        "7.5oz Haw Mango Habanero",
        "7.5oz Haw Maui Onion",
        "7.5oz Haw Luau BBQ",
        "7.5oz Original",
        "7.5oz Jalapeno",
        "7.5oz SS&V",
        "7.5oz Haw Swt & Tng Ginger",
        "7.5oz SC&O",
        "7.5oz Unsalted",
        "7.5oz Parmesan Garlic",
        "7.5oz Tims SB Cajun Chip",
        "7.5oz Haw SB Wasabi Chip",
        "7.5oz Thins Sea Salt",
        "7.5oz Thins Jalapeno",
        "7.5oz Smoked Gouda",
        "7oz Waves Luau BBQ",
        "7oz Waves Maui Onion",
        "7oz Waves Sea Salt", 
        "16oz Tims Orig",
        "16oz Tims Jalapeno",
        "16oz Tims SS&V",
        "16oz Haw Orig",
        "16oz Haw Maui Onion",
        "16oz Haw Luau BBQ",
        "4oz Haw Maui Onion",
        "4oz Haw Luau BBQ Ring",
        "4oz Haw Ring of Fire",
        "1.5oz Erins Orig PC",
        "1.5oz Erins Low Salt PC",
        "5.5oz Erins Orig PC",
        "5.5oz Erins Red Sodium PC",
        "5.5oz Erins White Chedder PC",
        "VP 1.5oz Tims Box",
        "VP 1.5oz Hawaiian Box",
        "LJ 5.5oz Jalapeno Lime",
        "LJ 5.5oz Red Pepper Veggie",
        "LJ 6oz SS Seashore",
        "LJ 5.5oz Sweet Potato",
        "LJ 11oz Chia/Quinoa",
        "LJ 11oz SS Rest",
        "LJ 11oz SS & Lime",
        "LJ 11oz Jal Lime",
        "LJ 5.5oz No Grain SS",
        "LJ 5.5oz No Grain SS & Lime",
        "LJ 5oz BBQ Pot",
        "LJ 5oz Sea Salt Pot",
        "LJ 5oz SS & V Pot",
        "LJ 8oz Blue Corn Dippers",
        "LJ 8oz White Corn Dippers",
        "LJ 5.5oz Korean BBQ",
        "LJ 15.5oz Verde Salsa",
        "LJ 15.5oz Mild Salsa",
        "LJ 15.5oz Medium Salsa",
        "LJ 5oz Org Mini PB Sandwich",
        "LJ 6oz Org Chia & Quinoa Cracker",
        "LJ 6oz Org Classic Cracker",
        "LJ 5oz Org Mini ChedChz Sandwich",
        "GH 6.25oz SS Veggie Stix",
        "GH 6.25oz Veggie Chips",
        "Herdez 4.625oz Chili Lime Pork Rinds",
        "Herdez 4.625oz Hot Pork Rinds",
        "Herdez 4.625oz Reg Pork Rinds",
        "Zapps 5oz Cajun Craw",
        "Zapps 5oz Evil Eye",
        "Zapps 5oz Voodoo",
        "Torts 12.5oz Rest Style",
        "Torts 12.5oz Cantina Style",
        "Torts Blue Corn",
        "Utz 23oz Cheese",
        "Utz 20oz Pub Mix",
        "Utz 20oz Poker Mix",
        "Utz 24oz PB Filled Pretzel",
        "OTB 11.5oz Guac Squeeze",
        "OTB 11.5oz Med Salsa Squeeze",
        "OTB 11.5oz Chdr Queso Squeeze",
        "OTB 15.5oz Chdr Queso",
        "OTB 16oz Mild Salsa",
        "OTB 16oz Med Salsa",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Snak",
        "Sig Sel",
        "Sig Sel",
        "ON",
        "ON",
        "ON",
        "ON",
        "Juanitas",
        "Juanitas",
        "Juanitas",
        "Juanitas",
        "Juanitas",
        "Carmens",
        "Carmens",
        "Angies",
        "Angies",
        "Angies",
        "Angies",
        "Skinny",
        "Skinny",
        "Skinny",
        "Skinny",
        "Skinny",
        "Skinny",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "SOH",
        "Lance",
        "Lance",
        "Lance",
        "Lance",
        "Lance",
        "Lance",
        "Lance",
        "Lance",
        "Lance",



    ]

    const handleClose = () => {
        props.setShow(false)
    }

    function needTextBox() {
        if(medNameRef.current.value === "Other") {
            setNeedText(true)
        } else {
            setModalError('')
            setNeedText(false)
        }
    }

    function handleAddMed() {

        if(needText && otherNameRef.current.value === "") {
            return setModalError("Medication must have a name")
        }

        const payload = {
            id: currentUser.uid,
            med: {
                name: medNameRef.current.value,
                type: typeRef.current.value,
                doses:[]
            }
        }
        API.addNewMed(payload )
            .then(({data}) => {
                Local.setMedsArr(data.meds)
                handleClose()
            })
            .catch(err => {
                console.log(err)
                API.saveTransaction({
                    apiName: "addNewMed",
                    payload: payload
                })
                let tempArr = Local.getMedsArr()
                tempArr.push(payload.med)
                Local.setMedsArr(tempArr)
                handleClose()
                props.setMedError("No connection found.  Data will be stored when connection is reestablished.")
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
            <Modal.Title>Add New Medication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalError && <Alert variant="danger">{modalError}</Alert>}
            <Form>
                <Form.Group>
                    <Form.Label>Medication Name</Form.Label>
                    <Form.Control as="select" ref={medNameRef} onChange={needTextBox}>
                        {potentialMeds.map(med => (<option>{med}</option>))}
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                {needText && (
                <Form.Group>
                    <Form.Label>Enter In Other Name</Form.Label>
                    <Form.Control type='text' ref={otherNameRef} placeholder="medication name"/>
                </Form.Group>
                )}
                <Form.Group>
                    <Form.Label>Medication Type</Form.Label>
                    <Form.Control as='select' ref={typeRef} >
                        <option>Injection</option>
                        <option>Oral</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleAddMed}>Enter</Button>
        </Modal.Footer>
        </Modal>

    )
}