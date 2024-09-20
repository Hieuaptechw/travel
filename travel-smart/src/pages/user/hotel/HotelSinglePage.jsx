import React, { useState } from 'react';
import { Breadcrumb, Container, Row, Col, Modal, Button } from "react-bootstrap";
import "./HotelSingle.scss";
import ReactStars from "react-stars";
import img1 from "../../../assets/images/Barcelona.jpg"
import img2 from "../../../assets/images/London.png"
import img3 from "../../../assets/images/NewYork.jpg"
import img4 from "../../../assets/images/Sydney.jpg"
import img5 from "../../../assets/images/Tokyo.jpg"
import RatingBar from './Rating';
import RatingStar from './RatingStar';
import Features from './Features';
import Hotelsur from './Hotelsurroundings';
import Collapse from 'react-bootstrap/Collapse';
const HotelSingPage = () => {
    // img
    const images = [img1, img2, img3, img4, img5];
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

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

    //features
    const features_Bathroom = [
        { label: 'Towels', icon: 'bi bi-check' },
        { label: 'Bath or shower', icon: 'bi bi-check' },
        { label: 'Private bathroom', icon: 'bi bi-check' },
        { label: 'Toilet', icon: 'bi bi-check' },
        { label: 'Free toiletries', icon: 'bi bi-check' },
        { label: 'Hairdryer', icon: 'bi bi-check' },
        { label: 'Bath', icon: 'bi bi-check' }
    ];
    const features_Bedroom = [
        { label: 'Linen', icon: 'bi bi-check' },
        { label: 'Wardrobe or closet', icon: 'bi bi-check' }
    ];
    const features_Reception = [
        { label: 'Invoice provided', icon: 'bi bi-check' },
        { label: 'Private check-in/check-out', icon: 'bi bi-check' },
        { label: 'Luggage storage', icon: 'bi bi-check' },
        { label: '24-hour front desk', icon: 'bi bi-check' }
    ];
    const features_MediaTechnology = [
        { label: 'Flat-screen TV', icon: 'bi bi-check' },
        { label: 'Satellite channels', icon: 'bi bi-check' },
        { label: 'Radio', icon: 'bi bi-check' },
        { label: 'Telephone', icon: 'bi bi-check' },
        { label: 'TV', icon: 'bi bi-check' }
    ];

    const features_FoodDrink = [
        { label: 'Kid meals', icon: 'bi bi-check' },
        { label: 'Special diet menus (on request)', icon: 'bi bi-check' },
        { label: 'Breakfast in the room', icon: 'bi bi-check' },
        { label: 'Bar', icon: 'bi bi-check' },
        { label: 'Restaurant', icon: 'bi bi-check' },
        { label: 'Tea/Coffee maker', icon: 'bi bi-check' }
    ];

    const features_CleaningServices = [
        { label: 'Daily housekeeping', icon: 'bi bi-check' },
        { label: 'Dry cleaning', icon: 'bi bi-check' },
        { label: 'Laundry', icon: 'bi bi-check' }
    ];

    const features_SafetySecurity = [
        { label: 'Fire extinguishers', icon: 'bi bi-check' },
        { label: 'CCTV in common areas', icon: 'bi bi-check' },
        { label: 'Smoke alarms', icon: 'bi bi-check' },
        { label: '24-hour security', icon: 'bi bi-check' }
    ];

    const features_General = [
        { label: 'Hypoallergenic', icon: 'bi bi-check' },
        { label: 'Non-smoking throughout', icon: 'bi bi-check' },
        { label: 'Wake-up service', icon: 'bi bi-check' },
        { label: 'Heating', icon: 'bi bi-check' },
        { label: 'Packed lunches', icon: 'bi bi-check' },
        { label: 'Carpeted', icon: 'bi bi-check' },
        { label: 'Lift', icon: 'bi bi-check' },
        { label: 'Fan', icon: 'bi bi-check' },
        { label: 'Family rooms', icon: 'bi bi-check' },
        { label: 'Facilities for disabled guests', icon: 'bi bi-check' },
        { label: 'Ironing facilities', icon: 'bi bi-check' },
        { label: 'Non-smoking rooms', icon: 'bi bi-check' },
        { label: 'Iron', icon: 'bi bi-check' },
        { label: 'Room service', icon: 'bi bi-check' }
    ];
    // Hotel
    const hotel_nearby = [
        { label: 'Royal Pump Room Museum', number: '0.1 km' },
        { label: 'Harrogate Turkish Baths', number: '0.1 km' },
        { label: 'Royal Hall Theatre', number: '0.1 km' },
        { label: 'Harrogate Theatre', number: '0.1 km' },
        { label: 'Harrogate Library', number: '0.1 km' },
        { label: 'The Valley Gardens', number: '0.1 km' },
        { label: 'Harrogate District Hospital', number: '0.1 km' }
    ];
    const closest_airports = [
        { label: 'Leeds Bradford International Airport', number: '57.9 km' },
        { label: 'Durham Tees Valley Airport', number: '57.9 km' },
        { label: 'Doncaster Sheffield Airport', number: '57.9 km' }
    ];

    const restaurants_cafes = [
        { label: 'Bettys Café Tea Rooms', number: '57.9 km' },
        { label: 'Bettys Café Tea Rooms', number: '57.9 km' }
    ];

    const top_attractions = [
        { label: 'Ripley Castle', number: '57.9 km' },
        { label: 'Roundhay Park', number: '57.9 km' },
        { label: 'Bramham Park', number: '57.9 km' }
    ];

    const questions = [
        {
            question: "How old do I have to be to rent a car?",
            answer: "Typically, you need to be at least 21 years old to rent a car. Some companies may allow rentals for those 18 and older, but there may be additional fees."
        },
        {
            question: "Can I book a hire car for someone else?",
            answer: "Yes, you can book a hire car for someone else, but the person picking up the car must meet the rental requirements."
        },
        {
            question: "How do I find the cheapest car hire deal?",
            answer: "To find the cheapest deal, compare prices across multiple rental companies, check for discounts, and consider booking in advance."
        },
        {
            question: "What should I look for when I'm choosing a car?",
            answer: "Consider factors like size, fuel efficiency, rental cost, and the car's features to ensure it meets your needs."
        }
    ];
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
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
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-column align-items-center'>
                                        <i class="fa-solid fa-city mb-3 fs-30"></i>
                                        <p className='text-center'>In London City Centre</p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-column align-items-center'>
                                        <i class="fa-solid fa-plane mb-3 fs-30"></i>
                                        <p className='text-center'>Airport transfer</p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-column align-items-center'>
                                        <i class="fa-solid fa-bell mb-3 fs-30"></i>
                                        <p className='text-center'>Front desk [24-hour]</p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-column align-items-center'>
                                        <i class="fa-solid fa-tv mb-3 fs-30"></i>
                                        <p className='text-center'>Premium TV channels</p>
                                    </div>
                                </Col>
                            </Row>
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
                                <Col xs={6} className='d-flex flex-column'>
                                    <div className='d-flex flex-row align-items-center mb-3'>
                                        <i className="fa-solid fa-smoking-ban"></i>
                                        <p className='text-center text-muted m-0 ms-2'>Non-smoking rooms</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center mb-3'>
                                        <i className="fa-solid fa-parking"></i>
                                        <p className='text-center text-muted m-0 ms-2'>Parking</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center mb-3'>
                                        <i className="fa-solid fa-house-chimney"></i>
                                        <p className='text-center text-muted m-0 ms-2'>Living Area</p>
                                    </div>
                                </Col>
                                <Col xs={6} className='d-flex flex-column'>
                                    <div className='d-flex flex-row align-items-center mb-3'>
                                        <i className="fa-solid fa-wifi"></i>
                                        <p className='text-center text-muted m-0 ms-2'>Free WiFi</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center mb-3'>
                                        <i className="fa-solid fa-kitchen-set"></i>
                                        <p className='text-center text-muted m-0 ms-2'>Kitchen</p>
                                    </div>
                                    <div className='d-flex flex-row align-items-center mb-3'>
                                        <i className="fa-solid fa-shield-alt"></i>
                                        <p className='text-center text-muted m-0 ms-2'>Safety & security</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='bg-light-success d-flex flex-row align-items-center p-3'>
                                <Col md={2} xs={1} sm={2} className='star-container d-flex align-items-center justify-content-center'>
                                    <ReactStars count={1} size={50} value={5} edit={false} activeColor="#ffd700" />
                                </Col>
                                <Col md={10} xs={9} sm={10} className='d-flex flex-column'>
                                    <h6>This property is in high demand!</h6>
                                    <p className='m-0'>7 travelers have booked today.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h3 className='my-5 mb-3'>Available Rooms</h3>
                    <Row>
                        {Array(2).fill(null).map((_, index) => (
                            <>
                                <Col md={12} className='p-3 mb-3 border'>
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
                                                <div className='d-flex flex-row align-items-center mb-3'>
                                                    <i className="fa-solid fa-smoking-ban"></i>
                                                    <p className='text-center text-muted m-0 ms-2'>Non-smoking rooms</p>
                                                </div>
                                                <div className='d-flex flex-row align-items-center mb-3'>
                                                    <i className="fa-solid fa-parking"></i>
                                                    <p className='text-center text-muted m-0 ms-2'>Parking</p>
                                                </div>
                                                <div className='d-flex flex-row align-items-center mb-3'>
                                                    <i className="fa-solid fa-house-chimney"></i>
                                                    <p className='text-center text-muted m-0 ms-2'>Living Area</p>
                                                </div>
                                                <div className='d-flex flex-row align-items-center mb-3'>
                                                    <i className="fa-solid fa-kitchen-set"></i>
                                                    <p className='text-center text-muted m-0 ms-2'>Kitchen</p>
                                                </div>
                                                <a href="#" className='text-decoration-underline'>Show Room Information</a>
                                            </Col>
                                            <Col md={7} className='p-0'>
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
                                                        <Col md={2} xs={4}>
                                                            <select className='form-select w-100' aria-label="Select rooms">
                                                                <option value="1">1 (US$ 3,120)</option>
                                                                <option value="2">2 (US$ 3,120)</option>
                                                                <option value="3">3 (US$ 3,120)</option>
                                                                <option value="4">4 (US$ 3,120)</option>
                                                                <option value="5">5 (US$ 3,120)</option>
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
                                                    <li className='text-muted'>Confirmation is immediate</li>
                                                    <li className='text-muted'>No registration required</li>
                                                    <li className='text-muted'>No booking or credit card fees!</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </>
                        ))}
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
            {/* Facilities  */}
            <section className='p-3'>
                <Container className='p-0'>
                    <h5>Facilities of this Hotel</h5>
                    <Row>
                        <Col>
                            <Features title="Bathroom" features={features_Bathroom} icon="bi bi-1-circle" />
                            <Features title="Bedroom" features={features_Bedroom} icon="bi bi-2-circle" />
                            <Features title="Reception services" features={features_Reception} icon="bi bi-3-circle" />
                        </Col>
                        <Col>
                            <Features title="Media & Technology" features={features_MediaTechnology} icon="bi bi-4-circle" />
                            <Features title="Food & Drink" features={features_FoodDrink} icon="bi bi-5-circle" />
                            <Features title="Cleaning Services" features={features_CleaningServices} icon="bi bi-6-circle" />
                        </Col>
                        <Col>
                            <Features title="Safety & Security" features={features_SafetySecurity} icon="bi bi-7-circle" />
                            <Features title="General" features={features_General} icon="bi bi-8-circle" />
                        </Col>
                    </Row>
                    <Row className='bg-light d-flex flex-row align-items-center p-3'>
                        <Col md={2} className='star-container d-flex align-items-center justify-content-center'>
                            <i className="bi bi-heart-fill fs-30 d-flex align-items-center"></i>
                        </Col>
                        <Col md={10} className='d-flex flex-column'>
                            <h6>Extra health & safety measures</h6>
                            <p className='m-0'>This property has taken extra health and hygiene measures to ensure that your safety is their priority</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Hotel surroundings */}
            <section className='p-3'>
                <Container className='p-0'>
                    <h5> Hotel surroundings </h5>
                    <Row>
                        <Col>
                            <Hotelsur title="What's nearby" features={hotel_nearby} icon="bi bi-geo-alt" />
                        </Col>
                        <Col>
                            <Hotelsur title="Closest airports" features={closest_airports} icon="bi bi-geo-alt" />
                            <Hotelsur title="Restaurants & cafes" features={restaurants_cafes} icon="bi bi-geo-alt" />
                        </Col>
                        <Col>
                            <Hotelsur title="Top attractions" features={top_attractions} icon="bi bi-geo-alt" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Fact */}
            <section className='p-3'>
                <Container className='p-0'>
                    <h5 className='mb-3'>Some helpful facts</h5>
                    <Row>
                        <Col className='text-muted'>
                            <div className='d-flex align-items-center mb-2'>
                                <i class="bi bi-calendar-check"></i>
                                <h6 className='ms-2 mb-0'>Check-in/Check-out</h6>
                            </div>
                            <p className='mb-1'>Check-in from: 16:00</p>
                            <p className='mb-1'>Check-out until: 12:00</p>
                            <p className='mb-3'>Reception open until: 00:00</p>

                            <div className='d-flex align-items-center mb-2'>
                                <i class="bi bi-geo-alt"></i>
                                <h6 className='ms-2 mb-0'>Getting around</h6>
                            </div>
                            <p className='mb-1'>Airport transfer fee: 60 USD</p>
                            <p className='mb-1'>Distance from city center: 2 km</p>
                            <p className='mb-1'>Travel time to airport (minutes): 45</p>
                        </Col>
                        <Col className='text-muted'>
                            <div className='d-flex align-items-center mb-2'>
                                <i class="bi bi-ticket"></i>
                                <h6 className='ms-2 mb-0'>Extras</h6>
                            </div>
                            <p className='mb-1'>Breakfast charge (unless included in room price): 25 USD</p>
                            <p className='mb-3'>Daily Internet/Wi-Fi fee: 10 USD</p>

                            <div className='d-flex align-items-center mb-2'>
                                <i class="bi bi-p-circle"></i>
                                <h6 className='ms-2 mb-0'>Parking</h6>
                            </div>
                            <p className='mb-1'>Daily parking fee: 65 USD</p>
                        </Col>
                        <Col className='text-muted'>
                            <div className='d-flex align-items-center mb-2'>
                                <i class="bi bi-slash-square"></i>
                                <h6 className='ms-2 mb-0'>The property</h6>
                            </div>
                            <p className='mb-1'>Non-smoking rooms/floors: Yes</p>
                            <p className='mb-1'>Number of bars/lounges: 1</p>
                            <p className='mb-1'>Number of floors: 26</p>
                            <p className='mb-1'>Number of restaurants: 1</p>
                            <p className='mb-3'>Number of rooms : 443</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* FAQs  */}
            <section className='p-3'>
                <Container className='p-0'>
                    <Row>
                        <Col md={4}>
                            <h3>FAQs about <br />The Crown Hotel</h3>
                        </Col>
                        <Col md={8}>
                            {questions.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={() => toggleOpen(index)}
                                    aria-controls={`collapse-text-${index}`}
                                    aria-expanded={openIndex === index}
                                    className='bg-transparent w-100 p-4 text-dark text-start mb-2'
                                >
                                    <div className='d-flex align-items-center'>
                                        <i className={`bi ${openIndex === index ? "bi-dash-circle-fill icon-transition icon-rotate fs-30" : "bi-plus-circle icon-transition fs-30"}`} style={{ marginRight: '8px' }}></i>
                                        {item.question}
                                    </div>
                                    <Collapse in={openIndex === index}>
                                        <div id={`collapse-text-${index}`} className="mt-2">
                                            <p className='text-muted'>{item.answer}</p>
                                        </div>
                                    </Collapse>
                                </Button>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
};

export default HotelSingPage;