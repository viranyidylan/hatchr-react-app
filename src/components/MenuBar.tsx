import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
//import { ReactComponent as Logo } from '../assets/hatchr-logo-white.svg'
import React from 'react'

var navButtonText = "companies"
var navButtonPath = "companies"

if (window.location.pathname === '/companies') {
    navButtonText = "developers"
    navButtonPath = "/"
} else {
    navButtonText = "companies"
    navButtonPath = "/companies"
}

function MenuBar() {
    return (
        <Navbar className="menu-bar" collapseOnSelect expand="lg" variant='dark' fixed='top'>
            <Container >
                <Navbar.Brand>
                    {/* <Logo height='40px'/> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-${expand}" />
                <Navbar.Offcanvas 
                    id={`offcanvasNavbar-expand-${"lg"}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                        lil menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="menu-links">
                            <Nav.Link href={navButtonPath}>{"For " + navButtonText}</Nav.Link>
                            <Nav.Link href="/assessments">Coding tasks</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default MenuBar