import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button, Breadcrumb } from 'react-bootstrap';
import car1 from "../../../assets/images/car1.jpg";
import car2 from "../../../assets/images/car2.jpg";
import car3 from "../../../assets/images/car3.jpg";
import car4 from "../../../assets/images/car4.jpg";
import car5 from "../../../assets/images/car5.jpg";
import RatingBar from '../hotel/Rating';
import RatingStar from '../hotel/RatingStar';
import img1 from "../../../assets/images/car5.jpg";
const CarSingle = () => {
    const [selectedImage, setSelectedImage] = useState(car3);
    return (
        <>
            {/* Breadcrumbs */}
            < section className="bg-light p-3" >
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
            </section >
            {/* Title */}
            < section className="p-3" >
                <Container>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col md={9} sm={12}>
                            <Row className="d-flex flex-column">
                                <Col className="d-flex flex-column flex-md-row align-items-start">
                                    <h3 className="me-2">Mercedes-Benz E-Class</h3>

                                </Col>
                                <Col className="d-flex align-item-center">
                                    <span className="d-flex align-items-center">
                                        <i className="bi bi-geo-alt"></i>Heathrow Airport
                                        <a href="#" className="text-decoration-underline ms-3">Show on map</a>
                                    </span>

                                </Col>
                            </Row>
                        </Col>
                        {/* Pricing and Call to Action */}
                        <Col md={3} sm={12} className="text-end">
                            <div className="d-flex flex-column flex-md-row align-items-start justify-content-end">
                                <Row>
                                    <Col className="d-flex align-items-center justify-content-end">
                                        <a href="#" className="btn btn-light ms-3 mt-2 mt-md-0 d-flex align-items-center">
                                            Share
                                            <i class="fa-solid fa-arrow-up-from-bracket ms-2"></i>
                                        </a>
                                        <a href="#" className="btn btn-primary ms-3 mt-2 mt-md-0 d-flex align-items-center">
                                            Save
                                            <i class="fa-solid fa-heart ms-2"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            {/* img */}
            <section>
                <Container className="mt-5">
                    <Row>
                        {/* Sidebar with Car Images */}
                        <Col md={2}>
                            <div className="d-flex flex-column">
                                <img
                                    src={car1}
                                    alt="Car 1"
                                    onClick={() => setSelectedImage(car1)}
                                    className="mb-2"
                                    style={{ cursor: 'pointer' }}
                                />
                                <img
                                    src={car2}
                                    alt="Car 2"
                                    onClick={() => setSelectedImage(car2)}
                                    className="mb-2"
                                    style={{ cursor: 'pointer' }}
                                />
                                <img
                                    src={car4}
                                    alt="Car 4"
                                    onClick={() => setSelectedImage(car4)}
                                    className="mb-2"
                                    style={{ cursor: 'pointer' }}
                                />
                                <img
                                    src={car5}
                                    alt="Car 5"
                                    onClick={() => setSelectedImage(car5)}
                                    className="mb-2"
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </Col>

                        {/* Main Car Display */}
                        <Col md={7}>
                            <img src={selectedImage} alt="Main Car" style={{ width: '100%' }} />
                        </Col>

                        {/* Booking Form */}
                        <Col md={3}>
                            <Form>
                                <Form.Group controlId="locationPickUp">
                                    <Form.Label>Pick-up Location</Form.Label>
                                    <Form.Control type="text" placeholder="City or Airport" />
                                </Form.Group>

                                <Form.Group controlId="locationDropOff" className="mt-3">
                                    <Form.Label>Drop-off Location</Form.Label>
                                    <Form.Control type="text" placeholder="City or Airport" />
                                </Form.Group>

                                <Form.Group controlId="pickUpDate" className="mt-3">
                                    <Form.Label>Pick-up Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group controlId="dropOffDate" className="mt-3">
                                    <Form.Label>Drop-off Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group controlId="passengers" className="mt-3">
                                    <Form.Label>Passengers (Optional)</Form.Label>
                                    <Form.Control type="text" placeholder="2 adults, 1 child" />
                                </Form.Group>

                                <Button variant="warning" type="submit" className="mt-4 w-100">
                                    Book Now
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* property */}
            <section className='p-3'>
                <Container>
                    <h3 className='mb-3'>Property highlights</h3>
                    <Row>
                        <Col md={8} className='border-bottom'>
                            <Row className='text-center'>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-user fs-30"></i>
                                        <div className='d-flex flex-column ms-2 align-items-start'>
                                            <p className='mb-0'>User</p>
                                            <p className='mb-0'>4</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-suitcase-rolling fs-30"></i>
                                        <div className='d-flex flex-column ms-2 align-items-start'>
                                            <p className='mb-0'>Luggage</p>
                                            <p className='mb-0'>2</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-cogs fs-30"></i>
                                        <div className='d-flex flex-column ms-2 align-items-start'>
                                            <p className='mb-0'>Transmission</p>
                                            <p className='mb-0'>Automatic</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-tachometer-alt fs-30"></i>
                                        <div className='d-flex flex-column ms-2 align-items-start'>
                                            <p className='mb-0'>Mileage</p>
                                            <p className='mb-0'>Unlimited</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <h3 className='my-5 mb-3'>Overview</h3>
                    <Row>
                        <Col md={8} className='text-muted'>
                            <p className='mb-1'>Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle in one day is next to impossible. Designed specifically for</p>
                            <p className='mb-1'>travelers with limited time in London, this tour allows you to check off a range of southern England‘s historical attractions in just one,</p>
                            <p className='mb-1'>day by eliminating the hassle of traveling between each one independently. Travel by comfortable coach and witness your guide bring</p>
                            <p className='mb-1'>each UNESCO World Heritage Site to life with commentary. Plus, all admission tickets are included in the tour price.</p>
                            <a href="#" className='text-decoration-underline mb-3'> Show more</a>
                            <hr />
                        </Col>
                    </Row>
                    <h3 className='my-5 mb-3'>Specifications</h3>
                    <Row className='border-bottom'>
                        <Col md={3} className='text-muted'>
                            <div className='mb-5'>
                                <h5>Make</h5>
                                <p>Honda</p>
                            </div>
                            <div className='mb-5'>
                                <h5>Mileage</h5>
                                <p>120,556</p>
                            </div>
                            <div className='mb-5'>
                                <h5>Horsepower (hp)</h5>
                                <p>200</p>
                            </div>
                        </Col>
                        <Col md={3} className='text-muted'>
                            <div className='mb-5'>
                                <h5>Make</h5>
                                <p>Honda</p>
                            </div>
                            <div className='mb-5'>
                                <h5>Mileage</h5>
                                <p>120,556</p>
                            </div>
                            <div className='mb-5'>
                                <h5>Horsepower (hp)</h5>
                                <p>200</p>
                            </div>
                        </Col>
                        <Col md={3} className='text-muted'>
                            <div className='mb-5'>
                                <h5>Make</h5>
                                <p>Honda</p>
                            </div>
                            <div className='mb-5'>
                                <h5>Mileage</h5>
                                <p>120,556</p>
                            </div>
                            <div className='mb-5'>
                                <h5>Horsepower (hp)</h5>
                                <p>200</p>
                            </div>
                        </Col>
                    </Row>
                    <h3>Amenities</h3>
                    <Row>
                        <Col md={4}>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <i class="bi bi-check"></i>
                                    <p className='mb-0'>Airbag</p>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <i class="bi bi-check"></i>
                                    <p className='mb-0'>Power Windows</p>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <i class="bi bi-check"></i>
                                    <p className='mb-0'>Speed Km</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <i class="bi bi-check"></i>
                                    <p className='mb-0'>FM Radio</p>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <i class="bi bi-check"></i>
                                    <p className='mb-0'>Sensor</p>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <i class="bi bi-check"></i>
                                    <p className='mb-0'>Steering Wheel</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            {/* Review */}
            <section className='p-3'>
                <Container className='p-0'>
                    <Row className='align-items-center mb-5'>
                        <h2>Guest reviews</h2>
                        <Col md={3}>
                            <button className='btn btn-primary w-100 h-100 p-5'>
                                <div>
                                    <h1>4.8</h1>
                                    <p>Exceptional</p>
                                    <p>3,014 reviews</p>
                                </div>
                            </button>
                        </Col>
                        <Col md={9}>
                            <Row className="row">
                                <Col>
                                    <RatingBar label="Location" score={9.4} />
                                    <RatingBar label="Value for money" score={8.0} />
                                    <RatingBar label="Free WiFi" score={9.4} />
                                </Col>
                                <Col>
                                    <RatingBar label="Staff" score={8.4} />
                                    <RatingBar label="Cleanliness" score={9.4} />
                                </Col>
                                <Col>
                                    <RatingBar label="Staff" score={8.4} />
                                    <RatingBar label="Cleanliness" score={9.4} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Row className='mb-3'>
                                {Array(2).fill(null).map((_, index) => (
                                    <Col md={6} key={index}>
                                        <div>
                                            <div className='d-flex flex-row align-items-center mb-3'>
                                                <img src={img1} alt="" className='star-container' />
                                                <div className='ms-3'>
                                                    <h5>Tonko</h5>
                                                    <p className='m-0 text-muted'> March 2022</p>
                                                </div>
                                            </div>
                                            <div className='mb-3'>
                                                <h5 className='text-primary'>9.2 Superb</h5>
                                                <p className='mb-0 text-muted'>Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.</p>
                                            </div>
                                            <Row className='mb-3'>
                                                {Array(4).fill(null).map((_, index) => (
                                                    <Col md={2} xs={6}>
                                                        <img src={img1} alt="" className='img-fluid mb-3' />
                                                    </Col>
                                                ))}
                                            </Row>
                                            <div>
                                                <button className='border-0 text-primary bg-transparent'>Helpful</button>
                                                <button className='border-0 ms-5 bg-transparent'>Not helpful</button>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <button className='w-100 p-2 bg-transparent border-primary text-primary'>
                                        Show all 116 reviews
                                        <i class="bi bi-arrow-up-right ms-2"></i>
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Reply */}
            <section className='p-3'>
                <Container className='p-0'>
                    <Col md={8}>
                        <h5>Leave a reply</h5>
                        <p className='text-muted'>Your email address will not be published.</p>
                        <Row>
                            <Col>
                                <RatingStar label="Location" value={3} />
                                <RatingStar label="Value for money" value={5} />
                                <RatingStar label="Free WiFi" value={5} />
                            </Col>
                            <Col>
                                <RatingStar label="Staff" value={5} />
                                <RatingStar label="Comfort" value={5} />
                            </Col>
                            <Col>
                                <RatingStar label="Cleanliness" value={5} />
                                <RatingStar label="Facilities" value={5} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className='d-flex justify-content-between mb-3'>
                                <input type="text" name="" id="" placeholder="Text" className='w-100 p-3' />
                                <input type="text" name="" id="" placeholder="Email" className='w-100 ms-3 p-3' />
                            </Col>
                            <Col md={12} className='mb-3'>
                                <textarea name="" id="" placeholder='Write your comment' className='w-100 p-3'></textarea>
                            </Col>
                            <Col>
                                <button className='btn btn-primary p-3'>Post Comment <i class="bi bi-arrow-up-right ms-2"></i> </button>
                            </Col>
                        </Row>
                    </Col>

                </Container>
            </section>
        </>
    );
};

export default CarSingle
