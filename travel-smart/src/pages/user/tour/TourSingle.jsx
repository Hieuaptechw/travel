import React, { useState } from "react";
import { Container, Carousel, Row, Col, Breadcrumb, ListGroup, Collapse, Button } from 'react-bootstrap';
import img1 from '../../../assets/images/Barcelona.jpg'
import ReactStars from "react-stars";
import './TourSingle.scss'
import RatingBar from "../hotel/Rating";
import RatingStar from "../hotel/RatingStar";
const TourSingle = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const itineraryItems = [
        {
            id: 1,
            title: "Windsor Castle",
            details: "Stop: 60 minutes - Admission included",
            link: img1,
        },
        {
            id: 2,
            title: "St. George’s Chapel",
            details: "Stop: 60 minutes - Admission included",
            link: img1,
        },
        {
            id: 3,
            title: "The Roman Baths",
            details: "Stop: 60 minutes - Admission included",
            link: img1,
        },
        {
            id: 4,
            title: "Stonehenge",
            details: "Stop: 60 minutes - Admission included",
            link: img1,
        }
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
                                    <h3 className="me-2">Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock</h3>

                                </Col>
                                <Col className="d-flex align-item-center">
                                    <ReactStars count={5} size={18} value={5} edit={false} activeColor="#ffd700" />
                                    <span className="d-flex align-items-center">
                                        <p className="mb-0 ms-2">3014 revies</p>
                                        <i className="bi bi-geo-alt ms-3"></i>
                                        Westminster Borough, London
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
            </section>
            {/* Slide */}
            <section>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={img1} alt="" className="img fluid w-100" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={img1} alt="" className="img fluid w-100" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={img1} alt="" className="img fluid w-100" />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Tour snapshot */}
            <section className='p-3'>
                <Container>
                    <h3 className='mb-3'>Tour snapshot</h3>
                    <Row>
                        <Col md={8} className='border-bottom'>
                            <Row className='text-center'>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-clock mb-3 fs-30"></i>
                                        <p className='text-start ms-2'>Duration: <br />11h</p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-users mb-3 fs-30"></i>
                                        <p className='text-start ms-2'>Group size: <br />52</p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-bus mb-3 fs-30"></i>
                                        <p className='text-start ms-2'>Near public <br />transportation</p>
                                    </div>
                                </Col>
                                <Col xs={6} md={3}>
                                    <div className='d-flex flex-row align-items-center'>
                                        <i class="fa-solid fa-calendar-xmark mb-3 fs-30"></i>
                                        <p className='text-start ms-2'>Free cancellation <br />
                                            <a href="#" className="text-decoration-underline">Learn more</a></p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h3 className='my-3 mt-5'>Overview</h3>
                    <Row>
                        <Col md={8} className="text-muted">
                            <p className="mb-1">Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle in one day is next to impossible. Designed specifically for</p>
                            <p className="mb-1">travelers with limited time in London, this tour allows you to check off a range of southern England‘s historical attractions in just one</p>
                            <p className="mb-1">day by eliminating the hassle of traveling between each one independently. Travel by comfortable coach and witness your guide bring</p>
                            <p className="mb-1">each UNESCO World Heritage Site to life with commentary. Plus, all admission tickets are included in the tour price.</p>
                            <a href="#" className='text-decoration-underline'>Show more</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mt-5'>
                            <Row>
                                <Col xs={6} className='d-flex flex-column'>
                                    <h5>Avaible language</h5>
                                    <p className='text-start text-muted m-0'>German, Chinese, Portuguese, Japanese, English, Italian,</p>
                                    <p className='text-start text-muted m-0'>Chinese, French, Spanish</p>
                                </Col>
                                <Col xs={6} className='d-flex flex-column'>
                                    <h5>Cancellation policy</h5>
                                    <p className='text-start text-muted m-0'>For a full refund, cancel at least 24 hours in advance of the start</p>
                                    <p className='text-start text-muted m-0'>date of the experience.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='d-flex flex-column mt-5'>
                                    <h5>Highlights</h5>
                                    <ul className="text-muted">
                                        <li>Travel between the UNESCO World Heritage sites aboard a comfortable coach</li>
                                        <li>Explore with a guide to delve deeper into the history</li>
                                        <li>Great for history buffs and travelers with limited time</li>
                                    </ul>
                                    <hr />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className='mt-5'>
                            <Row>
                                <h4 className="mb-3">What‘s Included</h4>
                                <Col xs={6} className='d-flex flex-column'>
                                    <div className="d-flex flex-row">
                                        <i class="bi bi-check"></i>
                                        <p className='text-start text-muted m-0 ms-2'>Entry ticket to Harry Potter Warner Bros Studio Tour London</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <i class="bi bi-check"></i>
                                        <p className='text-start text-muted m-0 ms-2'> Return transfers in air-conditioned coach</p>
                                    </div>
                                </Col>
                                <Col xs={6} className='d-flex flex-column'>
                                    <div className="d-flex flex-row">
                                        <i class="bi bi-x"></i>
                                        <p className='text-start text-muted m-0 ms-2'>Food and drinks</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <i class="bi bi-x"></i>
                                        <p className='text-start text-muted m-0 ms-2'>Gratuities</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <i class="bi bi-x"></i>
                                        <p className='text-start text-muted m-0 ms-2'>Digital guide available in 10 different languages at additional cost</p>
                                    </div>
                                </Col>
                            </Row>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <h4>Important information</h4>
                                <Col className='mt-5'>
                                    <h5>Inclusions</h5>
                                    <ul className="text-muted">
                                        <li>Superior Coach, Wi-Fi and USB Charging On-board</li>
                                        <li>Expert guide</li>
                                        <li>Admission to Windsor Castle (if option selected)</li>
                                        <li>Admission to Stonehenge</li>
                                    </ul>
                                </Col>
                                <Col className="mt-5 text-muted">
                                    <h5>Departure details</h5>
                                    <p className="mb-1">Departures from 01st April 2022: Tour departs at 8 am</p>
                                    <p className="mb-1">(boarding at 7.30 am), Victoria Coach Station Gate 1-5</p>
                                </Col>
                                <Col className='mt-5'>
                                    <h5>Know before you go</h5>
                                    <ul className="text-muted">
                                        <li>Duration: 11h</li>
                                        <li>Mobile tickets accepted</li>
                                        <li>Instant confirmation</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12}>
                            <Row>
                                <Col className='mt-5'>
                                    <h5>Exclusions</h5>
                                    <ul className="text-muted">
                                        <li>Hotel pick-up and drop-off</li>
                                        <li>Gratuities</li>
                                        <li>Lunch</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12}>
                            <Row>
                                <Col className='mt-5'>
                                    <h5>Additional information</h5>
                                    <ul className="text-muted">
                                        <li>Confirmation will be received at time of booking</li>
                                        <li>Departs at 8am (boarding at 7.30am), Victoria Coach Station Gate 1-5, 164 Buckingham Palace Road, London, SW1W 9TP</li>
                                        <li>As Windsor Castle is a working royal palace, sometimes the entire Castle or the State Apartments within the Castle need to be closed at short notice. (if selected this option)</li>
                                        <li>Stonehenge is closed on 21 June due to the Summer Solstice. During this time, we will instead visit the Avebury Stone Circle.</li>
                                        <li>Please note: the tour itinerary and order may change</li>
                                    </ul>
                                </Col>
                                <hr />
                            </Row>
                        </Col>
                    </Row>
                    <Container>
                        <h2 className="my-4">Itinerary</h2>
                        <ListGroup variant="flush">
                            {itineraryItems.map((item, index) => (
                                <ListGroup.Item key={item.id} className="timeline-item">
                                    <Row>
                                        <Col xs={1} className="d-flex align-items-center justify-content-center">
                                            <div className="timeline-number">
                                                {index + 1}
                                            </div>
                                        </Col>
                                        <Col xs={11}>
                                            <h5>{item.title}</h5>
                                            <p>{item.details}</p>
                                            <Button
                                                key={index}
                                                onClick={() => toggleOpen(index)}
                                                aria-controls={`collapse-text-${index}`}
                                                aria-expanded={openIndex === index}
                                                className='bg-primary text-white text-start mb-2'
                                            >
                                                See details & photo
                                            </Button>
                                            <Collapse in={openIndex === index}>
                                                <div id={`collapse-text-${index}`} className="mt-2">
                                                    <img src={item.link} alt="" className="img-fluid"/>
                                                </div>
                                            </Collapse>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Container>
                </Container>
            </section >
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

    )
}
export default TourSingle;