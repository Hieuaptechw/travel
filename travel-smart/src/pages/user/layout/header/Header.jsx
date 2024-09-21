import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Navbar, Nav,Col } from "react-bootstrap";
import image from '../../../../assets/images/logo.png';
import './Header.scss';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { GlobalContext } from "../../../../App";

const Header = () => {

    const global = useContext(GlobalContext);

    const [mobileActive, setMobileActive] = useState(false);
    const [activeNav, setActiveNav] = useState("");

    const location = useLocation();

    const canRollover = () => {
        let breakpoint = window.getComputedStyle(document.documentElement).getPropertyValue("--bs-breakpoint-lg");
        return window.matchMedia(`((hover: hover) and (min-width: ${breakpoint}))`);
    }

    useEffect(() => {
        if (!activeNav) setMobileActive(false);
    }, [activeNav]);

    useEffect(() => {
        setActiveNav("");
    }, [location])

    const handleNavbarItemRollover = (item) => {
        console.log(canRollover());
        if (canRollover().matches) setActiveNav(item);
    }
    const handleNavbarItemClick = (e, item) => {
        e.preventDefault();
        setMobileActive(!!item);
        setActiveNav(item);
    }
    const handleHeaderMouseExit = () => {
        if (canRollover().matches) setActiveNav("");
    }
    const handleHeaderClickOut = () => {
        setActiveNav("");
    }
    
    const handleMobileToggleActive = () => {
        setMobileActive(!mobileActive);
        setActiveNav(!mobileActive ? (activeNav || "explore") : "");
    }

    return (
        <header className={
            "header-main p-3 sticky-top"
            + (activeNav ? " active" : "")
            + (mobileActive ? " mobile-active" : "")
        } onPointerLeave={handleHeaderMouseExit}>
            <Navbar class="d-" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img src={image} alt="Logo" className="logo" />
                    </Link>
                    <Nav id="navbar-nav-main">
                        <Nav.Link href="#nav-explore" data-active={activeNav === "explore"}
                            onPointerEnter={() => handleNavbarItemRollover("explore")} 
                            onClick={(e) => handleNavbarItemClick(e, "explore")} 
                        >
                            <Icon icon="mdi:compass-outline" />
                            <span>Explore</span>
                        </Nav.Link>
                        <Nav.Link href="#nav-stay" data-active={activeNav === "stay"}
                            onPointerEnter={() => handleNavbarItemRollover("stay")}
                            onClick={(e) => handleNavbarItemClick(e, "stay")}
                        >
                            <Icon icon="ri:road-map-line" />
                            <span>Stay</span>
                        </Nav.Link>
                        <Nav.Link href="#nav-transport" data-active={activeNav === "transport"}
                            onPointerEnter={() => handleNavbarItemRollover("transport")}
                            onClick={(e) => handleNavbarItemClick(e, "transport")}
                        >
                            <Icon icon="ri:direction-line" />
                            <span>Transport</span>
                        </Nav.Link>
                        <Nav.Link href="#nav-blogs" data-active={activeNav === "blogs"}
                            onPointerEnter={() => handleNavbarItemRollover("blogs")}
                            onClick={(e) => handleNavbarItemClick(e, "blogs")}
                        >
                            <Icon icon="material-symbols:news-outline" />
                            <span>Blogs</span>
                        </Nav.Link>
                        <Nav.Link href="#nav-more" data-active={activeNav === "more"}
                            onPointerEnter={() => handleNavbarItemRollover("more")}
                            onClick={(e) => handleNavbarItemClick(e, "more")}
                        >
                            <Icon icon="material-symbols:apps" />
                            <span>More</span>
                        </Nav.Link>
                    </Nav>
                    <button className="btn mobile-menu-btn" onClick={handleMobileToggleActive}>
                        <Icon icon={activeNav ? "line-md:menu-to-close-alt-transition" : "line-md:close-to-menu-alt-transition"} 
                            />
                    </button>
                    <div className="navbar-space flex-fill" onPointerEnter={handleHeaderMouseExit}>&nbsp;</div>
                    {
                        global.user ? <>
                            <Nav id="navbar-nav-user" class="navbar-nav signed-in">
                                <Link to="/checkout" className="nav-link">
                                    USD <b>1,008.40</b>
                                </Link>
                            </Nav>
                            <Link to="/profile" id="profile-btn" className="btn">
                                <Icon icon="bi:person"  />
                            </Link>
                        </> : <>
                            <Nav id="navbar-nav-user">
                                <Link to="/login" className="nav-link">Log in</Link>
                                <Link to="/signup" className="nav-link sign-up-button">Sign up</Link>
                            </Nav>
                        </>
                    }
                </Container>
            </Navbar>
            <div id="nav-bg" className={
                ""
                + (activeNav ? " active" : "")
            } onPointerLeave={handleHeaderMouseExit} onPointerDown={handleHeaderClickOut} />
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
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/tours">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/tour.jpg" />
                                        <div class="card-body">
                                            <h5 class="card-title">Tours</h5>
                                            <p class="card-subtitle mb-0 opacity-75">The more, the merrier</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/locations">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/landmarks.jpg" />
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
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/hotels">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Hotel/Paris.jpg" />
                                        <div class="card-body">
                                            <h5 class="card-title">Hotels</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Find a cozy room</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/rentals">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/rentals.jpg " />
                                        <div class="card-body">
                                            <h5 class="card-title">Rentals</h5>
                                            <p class="card-subtitle mb-0 opacity-75">Affordable temporary houses</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/cruises">
                                        <img className="card-img-top" src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/6897813827256/-Route-2-2D1N-Halong-Bay-by-Alisa-Premier-Luxury-5-Stars-Cruise-680d19e6-2ff0-4836-91f6-9da51ac47684.jpeg?tr=q-60,c-at_max,w-1280,h-720&_src=imagekit" />
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
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/flights">
                                        <img className="card-img-top" src="https://afar.brightspotcdn.com/dims4/default/3f96d36/2147483647/strip/true/crop/2441x1627+62+0/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F10%2F8c%2F4c8621923b7e191eb2c232bca3fd%2Foriginal-shutterstock-345664409.jpg" />
                                        <div class="card-body">
                                            <h5 class="card-title">Flights</h5>
                                            <p class="card-subtitle mb-0 opacity-75">The sky is the limit</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/trains">
                                        <img className="card-img-top" src="https://www.hsrail.org/wp-content/uploads/2024/05/Frecciarossa_South_of_Milan_Harnish_900x600.jpg" />
                                        <div class="card-body">
                                            <h5 class="card-title">Trains</h5>
                                            <p class="card-subtitle mb-0 opacity-75">All aboard for all</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <Link className="header-category card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="https://mezha.media/wp-content/uploads/2024/09/DS-SM-Tribute-900x600.jpg" />
                                        <div class="card-body">
                                            <h5 class="card-title">Car</h5>
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
                        <div className="col-12 col-lg-3 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
                            <h2>Blogs</h2>
                            <p>Stories to tell</p>
                            <Link className="btn btn-outline-light d-flex-center" to="/blogs">
                                View all blog posts
                                <Icon icon="radix-icons:arrow-top-right" inline class="fs-4 ms-1" />
                            </Link>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row g-2">
                                <h3>Latest stories</h3>
                                <div className="col-12 col-lg-6">
                                    <Link className="header-blog card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/7.png" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Top 10 locations in France to go to this holiday season</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this, deals are included</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="header-blog card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/6.png" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Where can I go? 5 amazing countries that are open right now</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this, deals are included</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="header-blog card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/5.png" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Booking travel during Corona: good advice in an uncertain time</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this, deals are included</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Link className="header-blog card h-100 text-decoration-none" to="/cars">
                                        <img className="card-img-top" src="https://img.hieuaptech.com/Banner/8.png" />
                                        <div class="card-body px-3 py-2">
                                            <h5 class="card-title">Safety tips to take note of when going to the beaches</h5>
                                            <p class="card-subtitle mb-0 opacity-75">You should not miss this, deals are included</p>
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
                            <h3>Checkout</h3>
                            <ul class="navbar-nav lh-lg">
                                <li><Link className="text-light" to="/checkout">Checkout</Link></li>
                        
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h3>Settings</h3>
                            <ul class="navbar-nav lh-lg">
                                <li><Link className="text-light" to="/setting">Setting</Link></li>
                                <li><Link className="text-light" to="/admin/dashboard">Dashboard Admin</Link></li>
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