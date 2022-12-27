import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
//import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/hatchr-logo.svg'


function MenuBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container >
                <Navbar.Brand href="/">
                    <Logo height='45px'/>
                </Navbar.Brand> {/* will add logo here! */}
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
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/companies">Companies</Nav.Link>
                            <Nav.Link href="/assessments">Assessments</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="">things</NavDropdown.Item>
                                <NavDropdown.Item href="">for</NavDropdown.Item>
                                <NavDropdown.Item href="">future</NavDropdown.Item>
                                <NavDropdown.Item href="">
                                    use
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default MenuBar;