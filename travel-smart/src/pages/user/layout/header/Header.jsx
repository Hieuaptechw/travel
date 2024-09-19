import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas, Tab, Col, Row } from 'react-bootstrap';
import image from '../../../../assets/images/logo.png';
import './Header.scss';

const Header = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openCategories, setOpenCategories] = useState(false);
    const [openPages, setOpenPages] = useState(false);

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

    const handleCategoriesMouseEnter = () => setOpenCategories(true);
    const handleCategoriesMouseLeave = () => setOpenCategories(false);

    const handlePagesMouseEnter = () => setOpenPages(true);
    const handlePagesMouseLeave = () => setOpenPages(false);

    return (
        <header className="header sticky-top">
            <Container fluid>
                <Navbar expand="lg" className='navbar-color'>
                    {/* Logo */}
                    <Navbar.Brand href="#">
                        <img src={image} alt="Logo" className="logo" />
                    </Navbar.Brand>

                    {/* Navbar Toggle for small screens */}
                    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleShow} />

                    {/* Navbar Menu for large screens */}
                    <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
                        <Nav className="mx-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <NavDropdown
                                title="Categories"
                                id="categories-dropdown"
                                show={openCategories}
                                onMouseEnter={handleCategoriesMouseEnter}
                                onMouseLeave={handleCategoriesMouseLeave}
                                className="custom-dropdown"
                            >
                                <Tab.Container id="left-tabs-example" defaultActiveKey="hotel">
                                    <Nav variant="tabs" className="justify-content-start my-3">
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="hotel">Hotel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="tour">Tour</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="activity">Activity</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="holiday">Holiday Rentals</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="car">Car</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="cruise">Cruise</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='dropdown-item'>
                                            <Nav.Link eventKey="flight">Flight</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="hotel">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Hotel List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Home List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Hotel Single</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Home Single 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Hotel Booking</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Booking Page </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="tour">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Tour List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Tour List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Tour Pages</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Tour Page </a>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="activity">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Activity List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Activity List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Holiday Pages</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Activity Page </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="holiday">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Holiday List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Holiday List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Holiday Pages</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Holiday Page </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="car">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6 className=''>Car List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Car List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Car Pages</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Car Page </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="cruise">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Cruise List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Cruise List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Cruise Pages</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Cruise Page </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="flight">
                                            <Row>
                                                <Col className='d-flex justify-content-around text-white'>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Flight List</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Flight List 1</a>
                                                    </div>
                                                    <div className='d-flex flex-column'>
                                                        <h6>Flight Pages</h6>
                                                        <a href="http://example.com" target="_blank" rel="noopener noreferrer">Flight Page </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Tab.Container>
                            </NavDropdown>
                            <Nav.Link href="#">Destinations</Nav.Link>
                            <Nav.Link href="#">Blogs</Nav.Link>
                            <NavDropdown
                                title="Pages"
                                id="pages-dropdown"
                                show={openPages}
                                onMouseEnter={handlePagesMouseEnter}
                                onMouseLeave={handlePagesMouseLeave}
                                className="custom-dropdown"
                            >
                                <NavDropdown.Item href="#">About</NavDropdown.Item>
                                <NavDropdown.Item href="#">Terms</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center but ">
                            <Button variant="outline-light" className="header-button ms-2 button" >SIGN IN</Button>
                            <Button variant="primary" className="header-button ms-2 button">LOG IN</Button>
                        </div>
                    </Navbar.Collapse>

                    {/* Offcanvas Menu for small screens */}
                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end" className="offcanvas-custom">
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
                                    <NavDropdown.Item href="#">Flights</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Destinations</Nav.Link>
                                <Nav.Link href="#">Blogs</Nav.Link>
                                <NavDropdown title="Pages" id="pages-dropdown">
                                    <NavDropdown.Item href="#">About</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Terms</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Contact</Nav.Link>
                                <div className="d-flex flex-column">
                                    <Button variant="outline-light" className="mt-2 ">SIGN IN</Button>
                                    <Button variant="primary" className="mt-2 ">LOG IN</Button>
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
