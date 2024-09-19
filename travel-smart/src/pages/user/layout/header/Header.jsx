import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas } from 'react-bootstrap';

import './Header.scss';

const Header = () => {
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
                       
                    </Navbar.Brand>

                    {/* Navbar Toggle for small screens */}
                    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShow} />

                    {/* Navbar Menu for large screens */}
                    <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-between">
                        <Nav className="mx-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <NavDropdown title="Categories" id="categories-dropdown">
                                <NavDropdown.Item href="#">Hotel</NavDropdown.Item>
                                <NavDropdown.Item href="#">Tour</NavDropdown.Item>
                                <NavDropdown.Item href="#">Activity</NavDropdown.Item>
                                <NavDropdown.Item href="#">Holiday Rentals</NavDropdown.Item>
                                <NavDropdown.Item href="#">Car</NavDropdown.Item>
                                <NavDropdown.Item href="#">Cruise</NavDropdown.Item>
                                <NavDropdown.Item href="#">Flight</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Destinations</Nav.Link>
                            <Nav.Link href="#">Blogs</Nav.Link>
                            <NavDropdown title="Pages" id="pages-dropdown">
                                <NavDropdown.Item href="#">About</NavDropdown.Item>
                                <NavDropdown.Item href="#">Terms</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center">
                            <Button variant="outline-light" className="header-button ms-2">SIGN IN</Button>
                            <Button variant="primary" className="header-button ms-2">LOG IN</Button>
                        </div>
                    </Navbar.Collapse>

                    {/* Offcanvas Menu for small screens */}
                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="d-lg-none offcanvas-custom">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column">
                                <Nav.Link href="#">Home</Nav.Link>
                                <NavDropdown title="Categories" id="categories-dropdown">
                                    <NavDropdown.Item href="#">Hotel</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Tour</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Activity</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Holiday Rentals</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Car</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Cruise</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Flight</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Destinations</Nav.Link>
                                <Nav.Link href="#">Blogs</Nav.Link>
                                <NavDropdown title="Pages" id="pages-dropdown">
                                    <NavDropdown.Item href="#">About</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Terms</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Contact</Nav.Link>
                                <div className="d-flex flex-column">
                                    <Button variant="outline-light" className="mt-2">SIGN IN</Button>
                                    <Button variant="primary" className="mt-2">LOG IN</Button>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
