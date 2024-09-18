import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
import image from '../../../../assets/images/logo.jpg';
import './Header.scss';

const Header = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth >= 992) {
            setShowOffcanvas(false);
        }
    }, [windowWidth]);

    return (
        <header className="header">
            <Container fluid>
                <Navbar bg="dark" variant="dark" expand="lg">
                    {/* Logo */}
                    <Navbar.Brand href="#">
                        <img src={image} alt="Logo" className="logo" />
                    </Navbar.Brand>

                    {/* Navbar Toggle for small screens */}
                    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShow} />

                    {/* Navbar Menu for large screens */}
                    <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-between">
                        <Nav className="mx-auto">
                            <Nav.Link eventKey={1} href="#">Home</Nav.Link>
                            <NavDropdown title="Categories" id="categories-dropdown">
                                <NavDropdown.Item eventKey={2.1} href="#">Hotel</NavDropdown.Item>
                                <NavDropdown.Item eventKey={2.2} href="#">Tour</NavDropdown.Item>
                                <NavDropdown.Item eventKey={2.3} href="#">Activity</NavDropdown.Item>
                                <NavDropdown.Item eventKey={2.4} href="#">Holiday Rentals</NavDropdown.Item>
                                <NavDropdown.Item eventKey={2.5} href="#">Car</NavDropdown.Item>
                                <NavDropdown.Item eventKey={2.6} href="#">Cruise</NavDropdown.Item>
                                <NavDropdown.Item eventKey={2.7} href="#">Flight</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={3} href="#">Destinations</Nav.Link>
                            <Nav.Link eventKey={4} href="#">Blogs</Nav.Link>
                            <NavDropdown title="Pages" id="pages-dropdown">
                                <NavDropdown.Item eventKey={5.1} href="#">About</NavDropdown.Item>
                                <NavDropdown.Item eventKey={5.2} href="#">Terms</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={6} href="#">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center">
                            <Button variant="danger" className="ms-2">SIGN IN</Button>
                            <Button variant="primary" className="ms-2">LOG IN</Button>
                        </div>
                    </Navbar.Collapse>

                    {/* Offcanvas Menu for small screens */}
                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="d-lg-none offcanvas-custom">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column">
                                <Nav.Link eventKey={1} href="#">Home</Nav.Link>
                                <NavDropdown title="Categories" id="categories-dropdown">
                                    <NavDropdown.Item eventKey={2.1} href="#">Hotel</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2.2} href="#">Tour</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2.3} href="#">Activity</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2.4} href="#">Holiday Rentals</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2.5} href="#">Car</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2.6} href="#">Cruise</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={2.7} href="#">Flight</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link eventKey={3} href="#">Destinations</Nav.Link>
                                <Nav.Link eventKey={4} href="#">Blogs</Nav.Link>
                                <NavDropdown title="Pages" id="pages-dropdown">
                                    <NavDropdown.Item eventKey={5.1} href="#">About</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={5.2} href="#">Terms</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link eventKey={6} href="#">Contact</Nav.Link>
                                <Button variant="danger" className="mt-2">SIGN IN</Button>
                                <Button variant="primary" className="mt-2">LOG IN</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
