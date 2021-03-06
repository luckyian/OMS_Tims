import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import "./Navbar.css"
import Logo from '../../Images/timsLogo.png'
import { useHistory } from 'react-router-dom'

export default function NavbarComponent() {
    const { logout } = useAuth()
    const history = useHistory()

    function handleLogOut() {
        logout()
        history.push('/login')
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src={Logo}
                 alt ="logo"
                    width="40"
                    height="40"
                    className="d-inline-block"
                />{' '}
                      Jeff and Ashley's Order System
                 </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-links">
                    <Nav.Link className="navbar-links" href="/">Home</Nav.Link>
                    <Nav.Link href="">    </Nav.Link>
                    <Nav.Link href="chip">Add Chips</Nav.Link>
                    <Nav.Link href="">    </Nav.Link>
                    <Nav.Link href="store">Add Stores</Nav.Link>
                    <Nav.Link href="">    </Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="update-profile">Update Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="order">Create Order</NavDropdown.Item>
                        <NavDropdown.Item href="picklist">View Picklist</NavDropdown.Item>
                    </NavDropdown>
                    
                
                </Nav>
                <Form className="text-right">
                    <Button className="float-right mr-auto align-right logout my-2 my-sm-0" type="logout" onClick={handleLogOut}>Logout</Button>
                    </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
