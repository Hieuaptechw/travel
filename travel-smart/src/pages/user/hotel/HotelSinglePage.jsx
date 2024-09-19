import React, { useState } from 'react';
import { Breadcrumb, Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./HotelSingle.scss";
import ReactStars from "react-stars";
import img1 from "../../../assets/images/Barcelona.jpg"
import img2 from "../../../assets/images/London.png"
import img3 from "../../../assets/images/NewYork.jpg"
import img4 from "../../../assets/images/Sydney.jpg"
import img5 from "../../../assets/images/Tokyo.jpg"

const HotelSingPage = () => {
    const images = [img1, img2, img3, img4, img5];
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setCurrentIndex(index);
        setShow(true);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Breadcrumbs */}
            <section className="bg-light p-3">
                <Container>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col>
                            <Breadcrumb className="breadcumbs_single">
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/london-hotels">London Hotels</Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Great Northern Hotel, a Tribute Portfolio Hotel, London
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col xs="auto">
                            <a href="#" className="text-decoration-none">All hotels in London</a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Title */}
            <section className="p-3">
                <Container>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col md={9} sm={12}>
                            <Row className="d-flex flex-column">
                                <Col className="d-flex flex-column flex-md-row align-items-start">
                                    <h3 className="me-2">The Montcalm At Brewery London City</h3>
                                    <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                                </Col>
                                <Col>
                                    <span><i className="bi bi-geo-alt"></i> Westminster Borough, London</span>
                                    <a href="#" className="text-decoration-underline ms-2">Show on map</a>
                                </Col>
                            </Row>
                        </Col>

                        {/* Pricing and Call to Action */}
                        <Col md={3} sm={12} className="text-end">
                            <div className="d-flex flex-column flex-md-row align-items-start justify-content-end">
                                <Row>
                                    <Col className="d-flex align-items-center justify-content-end">
                                        <span className="fw-bold">From US$99</span>
                                        <a href="#" className="btn btn-primary ms-3 mt-2 mt-md-0 d-flex align-items-center">
                                            Select Room
                                            <i className="bi bi-arrow-up-right ms-2"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Image Section */}
            <section className="image-section p-3">
                <Container>
                    <Row className="d-flex flex-row align-items-center">
                        <Col md={6} className="mb-3">
                            <img src={img1} className="img-fluid" alt="Description" onClick={() => handleShow(0)} />
                        </Col>
                        <Col md={6}>
                            <Row className="d-flex flex-wrap">
                                {images.slice(1).map((img, index) => (
                                    <Col xs={6} sm={6} md={6} lg={6} className="mb-3" key={index}>
                                        <img src={img} className="img-fluid" alt="Description" onClick={() => handleShow(index + 1)} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Modal for showing the selected photo */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img src={images[currentIndex]} className="img-fluid" alt={`Photo ${currentIndex + 1}`} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePrev} disabled={currentIndex === 0}>
                        Previous
                    </Button>
                    <Button variant="secondary" onClick={handleNext} disabled={currentIndex === images.length - 1}>
                        Next
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Property highlights */}
            <section className='p-3'>
                <Container>
                    <h3 className='mb-3'>Property highlights</h3>
                    <Row>
                        <Col md={8} className='border-bottom'>
                            <Row className='text-center'>
                                {Array(4).fill(null).map((_, index) => (
                                    <Col xs={6} md={3} key={index}>
                                        <div className='d-flex flex-column align-items-center'>
                                            <i className="bi bi-geo-alt" style={{ fontSize: '24px' }}></i>
                                            <p className='text-center'>In London City Centre</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                    <h3 className='my-5 mb-3'>Overview</h3>
                    <Row>
                        <Col md={8} className='border-bottom'>
                            <p>You can directly book the best price if your travel dates are available, all discounts are already included. In the following house description you will find all information about our listing.</p>
                            <br />
                            <p>2-room terraced house on 2 levels. Comfortable and cosy furnishings: 1 room with 1 french bed and radio. Shower, sep. WC. Upper floor: (steep stair) living/dining room with 1 sofabed (110 cm, length 180 cm), TV. Exit to the balcony. Small kitchen (2 hot plates, oven,</p>
                            <br />
                            <a href="#" className='text-decoration-underline'>Show more</a>
                        </Col>
                    </Row>
                    <h3 className='my-5 mb-3'>Most Popular Facilities</h3>
                    <Row>
                        <Col md={8} className='border-bottom'>
                            <Row>
                                {Array(6).fill(null).map((_, index) => (
                                    <Col xs={6} key={index} className='d-flex mb-3'>
                                        <div className='d-flex flex-row align-items-center'>
                                            <i className="bi bi-geo-alt" style={{ fontSize: '24px' }}></i>
                                            <p className='text-center m-0 ms-2'>In London City Centre</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <Row className='bg-success d-flex flex-row align-items-center p-3'>
                                <Col md={2} className='star-container d-flex align-items-center justify-content-center'>
                                    <ReactStars count={1} size={50} value={5} edit={false} activeColor="#ffd700" />
                                </Col>
                                <Col md={10} className='d-flex flex-column'>
                                    <h6>This property is in high demand!</h6>
                                    <p className='m-0'>7 travelers have booked today.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h3 className='my-5 mb-3'>Available Rooms</h3>
                    <Row>
                        <Col md={12} className='p-3 border'>
                            <Container >
                                <h3 className='p-0'>Standard with room</h3>
                                <Row className='bg-primary p-3 mb-3 text-white d-none d-md-flex'>
                                    <Col md={2}>Room Type</Col>
                                    <Col md={7}>
                                        <Row>
                                            <Col md={4} className='p-0'>Benefits</Col>
                                            <Col md={2} className='p-0'>Sleeps</Col>
                                            <Col md={3} className='p-0'>Price for 5 nights</Col>
                                            <Col md={2} className='p-0'>Select Rooms</Col>
                                        </Row>
                                    </Col>
                                    <Col md={3}></Col>
                                </Row>
                                <Row className='bg-white'>
                                    <Col md={2} className='p-0'>
                                        <img src={img1} className='img-fluid mb-2' alt="Room" />
                                        {Array(4).fill(null).map((_, index) => (
                                            <div className='d-flex flex-row align-items-center' key={index}>
                                                <i className="bi bi-geo-alt" style={{ fontSize: '24px' }}></i>
                                                <p className='m-0 ms-2'>In London City Centre</p>
                                            </div>
                                        ))}
                                        <a href="#" className='text-decoration-underline'>Show Room Information</a>
                                    </Col>
                                    <Col md={7}>
                                        {Array(3).fill(null).map((_, index) => (
                                            <div className='d-flex flex-row align-items-start mb-3 border-bottom' key={index}>
                                                <Col md={4} className='d-flex flex-column'>
                                                    <p className='m-0'><b>Your price includes:</b></p>
                                                    <div className='d-flex flex-row text-success'>
                                                        <i className="bi bi-check"></i>
                                                        <p className='m-0 ms-2'>Pay at the hotel</p>
                                                    </div>
                                                    <div className='d-flex flex-row text-success'>
                                                        <i className="bi bi-check"></i>
                                                        <p className='m-0 ms-2'>Pay nothing until March 30, 2022</p>
                                                    </div>
                                                    <div className='d-flex flex-row text-success'>
                                                        <i className="bi bi-check"></i>
                                                        <p className='m-0 ms-2'>Free cancellation before April 1, 2022</p>
                                                    </div>
                                                </Col>
                                                <Col md={2} className='fs-30 text-start'>
                                                    <i className="bi bi-person-standing"></i>
                                                    <i className="bi bi-person-standing"></i>
                                                </Col>
                                                <Col md={3} className='price'>
                                                    <h5>US$99</h5>
                                                    <p>Includes taxes and charges</p>
                                                </Col>
                                                <Col md={2}>
                                                    <select className='form-select' aria-label="Select rooms">
                                                        <option value="">1 (US$ 3,120)</option>
                                                        <option value="">2 (US$ 3,120)</option>
                                                        <option value="">3 (US$ 3,120)</option>
                                                        <option value="">4 (US$ 3,120)</option>
                                                        <option value="">5 (US$ 3,120)</option>
                                                    </select>
                                                </Col>
                                            </div>
                                        ))}
                                    </Col>
                                    <Col md={3} className='bg-light p-3'>
                                        <p>3 rooms</p>
                                        <h3 className='mb-3'>US$99</h3>
                                        <button className='btn btn-primary w-100 p-3 mb-3'>Reserve<i class="bi bi-arrow-up-right ms-2"></i></button>
                                        <h5>You‘ll be taken to the next step</h5>
                                        <ul>
                                            <li>Confirmation is immediate</li>
                                            <li>No registration required</li>
                                            <li>No booking or credit card fees!</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
};

export default HotelSingPage;