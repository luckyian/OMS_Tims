import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Accordion, Row, Col, Card, Button, Alert } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import chipsModal from './chipsSubComps/modals/AddChipsModal'
import AddChipDose from './chipsSubComps/modals/AddChipDoseModal'
import DeletechipModal from './chipsSubComps/modals/DeleteChipModal'
import Local from '../utils/localStorage'
// import FooterComp from './SharedComponents/Footer'
import LineChart from './chipsSubComps/testchipChart'




export default function chip() {

    // const { currentUser } = useAuth()
    const [showChipModal, setShowChipModal] = useState(false);
    const [showDoseModal, setShowDoseModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState(false)
    const [reconnect, setReconnect] = useState(false)

    const chipsArr = Local.getChipsArr()

    const handleShowChipModal = () => setShowChipModal(true);
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
        if(error === "No connection found.  Data will be stored when connection is reestablished.") {
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
            
            </Container>

                {/* <Accordion className="acordian" defaultActiveKey="0">
                    <Card className="acordian">
                        <Card.Header className="acordian">
                            <Accordion.Toggle className="acordianbtn" as={Button} variant="link" eventKey="0">
                                chipication options
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Row className="chiprow">
                                <Col className='col-md-4'>
                                    <a className='btn chipbtn btn-block' onClick={handleShowDoseModal}>
                                        Log chipication Dose
                                    </a>
                                </Col>
                                <Col className='col-md-4'>
                                    <a className='btn chipbtn btn-block' onClick={handleShowchipModal}>
                                        Add new chipication
                                    </a>
                                </Col>
                                <Col className='col-md-4'>
                                    <a className='btn chipbtn btn-block' onClick={handleShowDeleteModal}>
                                        Delete chipication
                                    </a>
                                </Col>
                            </Row>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> */}
                {/* <LineChart /> */}
                {/* <Button style={styles.button} onClick={handleShowDoseModal}>
                                    Log chipication Dose
                                </Button> */}


                {/* <Button style={styles.button} onClick={handleShowchipModal}>
                                        Add new chipication
                                    </Button> */}

                {/* <Button style={styles.button} onClick={handleShowDeleteModal}>
                                    Delete chipication
                                </Button> */}
            </Container>
            {/* <FooterComp /> */}
            <chipsModal show={showChipModal} setShow={setShowChipModal} setChipError={setError} />
            <AddChipDose show={showDoseModal} setShow={setShowDoseModal} setChipError={setError} />
            <DeleteChipModal show={showDeleteModal} setShow={setShowDeleteModal} setChipError={setError} />

        </div>
    )
}
