import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
import image from '../../../../assets/logo.jpg';
import './header.css'; // Custom styles

const Header = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <header className="header">
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg">
                    {/* Logo Section */}
                    <Navbar.Brand href="#">
                        <img src={image} alt="Logo" className="img-fluid" />
                    </Navbar.Brand>

                    {/* Toggler Button for small screens */}
                    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShow} />

                    {/* Navbar Menu for large screens */}
                    <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-between">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <NavDropdown title="Catalog" id="catalog-dropdown">
                                <NavDropdown.Item href="#">Catalog Grid</NavDropdown.Item>
                                <NavDropdown.Item href="#">Catalog List</NavDropdown.Item>
                                <NavDropdown.Item href="#">Details Movie</NavDropdown.Item>
                                <NavDropdown.Item href="#">Details TV Series</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Pricing plans</Nav.Link>
                            <NavDropdown title="Pages" id="pages-dropdown">
                                <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
                                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#">Actor</NavDropdown.Item>
                                <NavDropdown.Item href="#">Contacts</NavDropdown.Item>
                                <NavDropdown.Item href="#">Privacy Policy</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        {/* Search Form and Sign In for large screens */}
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Button>
                        </Form>
                        <Button variant="danger" className="ms-2">SIGN IN</Button>
                    </Navbar.Collapse>

                    {/* Offcanvas Menu for small screens */}
                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="d-lg-none offcanvas-custom">
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <NavDropdown title="Catalog" id="catalog-dropdown">
                                    <NavDropdown.Item href="#">Catalog Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Catalog List</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Details Movie</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Details TV Series</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Pricing plans</Nav.Link>
                                <NavDropdown title="Pages" id="pages-dropdown">
                                    <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Actor</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Contacts</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Privacy Policy</NavDropdown.Item>
                                </NavDropdown>

                                {/* Search Form inside Offcanvas */}
                                <Form className="d-flex my-3">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </Button>
                                </Form>
                                <Button variant="danger">SIGN IN</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
