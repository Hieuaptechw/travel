import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl, Row, Col } from 'react-bootstrap';
import image from '../../../../assets/logo.jpg';
import './header.css'; 

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Logo Section */}
                    <Col xs={3}>
                        <Navbar.Brand href="#">
                            <img src={image} alt="Logo" className="img-fluid" />
                        </Navbar.Brand>
                    </Col>

                    {/* Navigation Links Section - Đưa ra giữa */}
                    <Col xs={5} >
                        <Navbar expand="lg" bg="dark" variant="dark" className="w-100 jusitfy-content-center">
                            <Navbar.Toggle aria-controls="navbar-nav" />
                            <Navbar.Collapse id="navbar-nav">
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
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>

                    {/* Search and Sign In Section */}
                    <Col xs={4} className="d-flex justify-content-end align-items-center">
                        <Form className="d-flex me-3">
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
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
