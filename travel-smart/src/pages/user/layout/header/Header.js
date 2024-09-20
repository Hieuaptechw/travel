import React, { useState } from "react";
import { Container, Row, Navbar, Nav,Col } from "react-bootstrap";
import image from '../../../../assets/images/logo.png';
import './Header.scss';
import { Link } from "react-router-dom";
const Header = () => {

    const [activeNav, setActiveNav] = useState("");

    const handleNavbarItemRollover = (item) => {
        console.log(item);
        setActiveNav(item);
    }

    const handleHeaderMouseExit = () => {
        setActiveNav("");
    }

    return (
        <header className="header-main p-3 sticky-top" onPointerExit={handleHeaderMouseExit}>
            <Navbar class="d-" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img src={image} alt="Logo" className="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#nav-explore" onPointerEnter={() => handleNavbarItemRollover("explore")}>Explore</Nav.Link>
                            <Nav.Link href="#nav-stay" onPointerEnter={() => handleNavbarItemRollover("stay")}>Stay</Nav.Link>
                            <Nav.Link href="#nav-transport" onPointerEnter={() => handleNavbarItemRollover("transport")}>Transport</Nav.Link>
                            <Nav.Link href="#nav-blogs" onPointerEnter={() => handleNavbarItemRollover("blogs")}>Blogs</Nav.Link>
                            <Nav.Link href="#nav-contact" onPointerEnter={() => handleNavbarItemRollover("contact")}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Link to="/login" className="nav-link">Log in</Link>
                            <Link to="/signup" className="nav-link sign-up-button">Sign up</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section id="nav-explore" className={
                "header-section"
                + (activeNav === "explore" ? " active" : "")
            }>
                <Container>
                    <div className="col-12 col-lg-3">
                        <h4>Explore</h4>
                        <p>Discover new places to visit</p>
                    </div>
                </Container>
            </section>
        </header>
    )
}
export default Header;