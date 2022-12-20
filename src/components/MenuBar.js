import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";

function MenuBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Hatchr</Navbar.Brand> {/* will add logo here! */}
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
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="">things</NavDropdown.Item>
                                <NavDropdown.Item href="">for</NavDropdown.Item>
                                <NavDropdown.Item href="">future</NavDropdown.Item>
                                <NavDropdown.Item href="">
                                    use
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default MenuBar;