import React, { useEffect, useState } from "react";
import { Container, Row, Navbar, Nav,Col } from "react-bootstrap";
import image from '../../../../assets/images/logo.png';
import './Header.scss';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Header = () => {

    const [mobileActive, setMobileActive] = useState(false);
    const [activeNav, setActiveNav] = useState("");

    const location = useLocation();

    useEffect(() => {
        setActiveNav("");
    }, [location])

    const handleNavbarItemRollover = (item) => {
        console.log(item);
        setActiveNav(item);
    }
    const handleHeaderMouseExit = () => {
        console.log("pointer exit");
        setActiveNav("");
    }
    
    const handleMobileToggleActive = () => {
        setMobileActive(!mobileActive);
    }

    return (
        <header className={
            "header-main p-3 sticky-top"
            + (mobileActive ? " mobile-active" : "")
        } onPointerLeave={handleHeaderMouseExit}>
            <Navbar class="d-" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img src={image} alt="Logo" className="logo" />
                    </Link>
                    <Nav id="navbar-nav-main">
                        <Nav.Link href="#nav-explore" onPointerEnter={() => handleNavbarItemRollover("explore")}>Explore</Nav.Link>
                        <Nav.Link href="#nav-stay" onPointerEnter={() => handleNavbarItemRollover("stay")}>Stay</Nav.Link>
                        <Nav.Link href="#nav-transport" onPointerEnter={() => handleNavbarItemRollover("transport")}>Transport</Nav.Link>
                        <Nav.Link href="#nav-blogs" onPointerEnter={() => handleNavbarItemRollover("blogs")}>Blogs</Nav.Link>
                        <Nav.Link href="#nav-more" onPointerEnter={() => handleNavbarItemRollover("more")}>More</Nav.Link>
                    </Nav>
                    <div className="flex-fill" />
                    <Nav id="navbar-nav-user">
                        <Link to="/login" className="nav-link">Log in</Link>
                        <Link to="/signup" className="nav-link sign-up-button">Sign up</Link>
                    </Nav>
                    <button className="btn mobile-menu-button" onClick={handleMobileToggleActive}>
                        <Icon icon="bi:menu" />
                    </button>
                </Container>
            </Navbar>
            <div id="nav-bg" className={
                ""
                + (activeNav ? " active" : "")
            } />
            <section id="nav-explore" className={
                "header-section"
                + (activeNav === "explore" ? " active" : "")
            }>
                <Container className="p-4">
                    <div class="row align-items-stretch">
                        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center">
                            <h2>Explore</h2>
                            <p>Discover new things</p>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row g-2">
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/tours">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Tours</h5>
                                            <p class="card-subtitle mb-0 opacity-75">The more, the merrier</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/locations">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Landmarks</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Go to amazing new places</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="nav-stay" className={
                "header-section"
                + (activeNav === "stay" ? " active" : "")
            }>
                <Container className="p-4">
                    <div class="row align-items-stretch">
                        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center">
                            <h2>Stay</h2>
                            <p>Live at memorable homes</p>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row g-2">
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/hotels">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Hotels</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Find a cozy room</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/rentals">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Rentals</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Affordable temporary houses</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/cruises">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Cruises</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Luxury mobile homes</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="nav-transport" className={
                "header-section"
                + (activeNav === "transport" ? " active" : "")
            }>
                <Container className="p-4">
                    <div class="row align-items-stretch">
                        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center">
                            <h2>Transport</h2>
                            <p>From point A to point B</p>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row g-2">
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/flights">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Flights</h5>
                                            <p class="card-subtitle mb-0 opacity-75">The sky is the limit</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/trains">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Trains</h5>
                                            <p class="card-subtitle mb-0 opacity-75">All aboard for all</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x240" />
                                        <div class="card-body">
                                            <h5 class="card-title">Car rentals</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Affordable transportation</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="nav-blogs" className={
                "header-section"
                + (activeNav === "blogs" ? " active" : "")
            }>
                <Container className="p-4">
                    <div class="row align-items-stretch">
                        <div className="col-12 col-lg-3 d-flex flex-column justify-content-center">
                            <h2>Blogs</h2>
                            <p>Stories to tell</p>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row g-2">
                                <h3>Latest stories</h3>
                                <div className="col-12 col-lg-6">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x40" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x40" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x40" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x40" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x40" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="//placehold.co/400x40" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="nav-more" className={
                "header-section"
                + (activeNav === "more" ? " active" : "")
            }>
                <Container className="p-4">
                    <div class="row g-3">
                        <div className="col-12 col-lg-3">
                            <h3>Introduction</h3>
                            <ul class="navbar-nav lh-lg">
                                <li><Link className="text-light" to="/about">About</Link></li>
                                <li><Link className="text-light" to="/branding">Branding</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h3>Legal</h3>
                            <ul class="navbar-nav lh-lg">
                                <li><Link className="text-light" to="/terms">Terms of Serice</Link></li>
                                <li><Link className="text-light" to="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h3>Help & Get in touch</h3>
                            <ul class="navbar-nav lh-lg">
                                <li><Link className="text-light" to="/help">Help Center</Link></li>
                                <li><Link className="text-light" to="/contact">Contact us</Link></li>
                                <li><Link className="text-light" to="/apply/supplier">Become a supplier</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </header>
    )
}
export default Header;