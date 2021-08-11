import React from 'react'
import { Card, Container, Accordion, Button } from 'react-bootstrap'
import NavbarComponent from "../SharedComponents/Navbar"


export default function StoreSelect() {
    return (
        <div>
            <NavbarComponent />
            
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Choose Store
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Choose Store to Update Chip List</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
            <Container>
                
            </Container>

        </div>
    )
}
