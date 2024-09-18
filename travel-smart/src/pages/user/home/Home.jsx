import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NewYorkImage from '../../../assets/images/NewYork.jpg';
import London from '../../../assets/images/London.png';
import Barcelona from '../../../assets/images/Barcelona.jpg';
import Sydney from '../../../assets/images/Sydney.jpg';
import Tokyo from '../../../assets/images/Tokyo.jpg';
import Paris from '../../../assets/images/Paris.jpg';
import icon1 from '../../../assets/images/1.svg';
import icon2 from '../../../assets/images/2.svg';
import icon3 from '../../../assets/images/3.svg';
import './Home.css';

const Home = () => {
    const cardData = [
        { id: 1, title: 'New York', text: '14 Hotel - 22 Cars - 18 Tours - 95 Activity', img: NewYorkImage },
        { id: 2, title: 'London', text: '10 Hotel - 15 Cars - 20 Tours - 80 Activity', img: London },
        { id: 3, title: 'Barcelona', text: '8 Hotel - 10 Cars - 15 Tours - 60 Activity', img: Barcelona },
        { id: 4, title: 'Sydney', text: '12 Hotel - 20 Cars - 30 Tours - 120 Activity', img: Sydney },
        { id: 5, title: 'Tokyo', text: '9 Hotel - 14 Cars - 18 Tours - 90 Activity', img: Tokyo },
        { id: 6, title: 'Paris', text: '11 Hotel - 19 Cars - 25 Tours - 100 Activity', img: Paris }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerRow = 3;
    const visibleCards = cardData.slice(currentIndex, currentIndex + cardsPerRow);
    const handleNext = () => {
        if (currentIndex + cardsPerRow < cardData.length) {
            setCurrentIndex(currentIndex + cardsPerRow);
        }
    };
    const handlePrev = () => {
        if (currentIndex - cardsPerRow >= 0) {
            setCurrentIndex(currentIndex - cardsPerRow);
        }
    };
    return (
        <>
            <section>
                <Container>

                    {/* Popular */}
                    <Row className='my-5'>
                        <Col>
                            <h1>Popular Destinations</h1>
                            <p>These popular destinations have a lot to offer</p>
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            <button className='view-all'>View All Destinations</button>
                        </Col>
                    </Row>
                    <Row className='my-5'>
                        <Col className="d-flex justify-content-between">
                            <Button variant="primary" onClick={handlePrev} disabled={currentIndex === 0}>
                                Previous
                            </Button>
                            <Button variant="primary" onClick={handleNext} disabled={currentIndex + cardsPerRow >= cardData.length}>
                                Next
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {visibleCards.map(card => (
                            <Col key={card.id} xs={12} md={4}>
                                <Card className="mb-4">
                                    <Card.Img variant="top" src={card.img} className='popular-img' />
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.text}</Card.Text>
                                        <Button variant="primary">Discover</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Discount */}
                    <Row className="my-5">
                        <Col md={6}>
                            <div className="custom-card">
                                <div className="overlay">
                                    <h2>Things To Do On Your Trip</h2>
                                    <Button variant="light" className="btn-overlay">Learn More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="custom-card">
                                <div className="overlay">
                                    <h2>Enjoy Summer Deals</h2>
                                    <h3>Up to 70% Discount!</h3>
                                    <Button variant="light" className="btn-overlay">Learn More</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Recommend */}
                    <Row className='my-5'>
                        <Col>
                            <h1>Recommended</h1>
                            <p>Interdum et malesuada fames ac ante ipsum</p>
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>
                            <select className='select'>
                                <option value="Hotel">Hotel</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <Card className="mb-4 hotel-card">
                                <Card.Img variant="top" src={NewYorkImage} className="popular-img" />
                                <Card.Body>
                                    <Card.Title className="hotel-title">The Montcalm At Brewery London City</Card.Title>
                                    <Card.Text className="hotel-location">Westminster Borough, London</Card.Text>
                                    <Row className="rating-row mb-2">
                                        <Col xs="auto" className="d-flex align-items-center">
                                            <Button variant="primary" className="rating-btn">4.7</Button>
                                        </Col>
                                        <Col className="d-flex flex-row align-items-center">
                                            <p className="rating-text mb-0">Exceptional</p>
                                            <p className="reviews-text mb-0">3014 reviews</p>
                                        </Col>
                                    </Row>
                                    <Card.Text className="price-text">Starting from <strong>US$72</strong></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="mb-4 hotel-card">
                                <Card.Img variant="top" src={NewYorkImage} className="popular-img" />
                                <Card.Body>
                                    <Card.Title className="hotel-title">The Montcalm At Brewery London City</Card.Title>
                                    <Card.Text className="hotel-location">Westminster Borough, London</Card.Text>
                                    <Row className="rating-row mb-2">
                                        <Col xs="auto" className="d-flex align-items-center">
                                            <Button variant="primary" className="rating-btn">4.7</Button>
                                        </Col>
                                        <Col className="d-flex flex-row align-items-center">
                                            <p className="rating-text mb-0">Exceptional</p>
                                            <p className="reviews-text mb-0">3014 reviews</p>
                                        </Col>
                                    </Row>
                                    <Card.Text className="price-text">Starting from <strong>US$72</strong></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="mb-4 hotel-card">
                                <Card.Img variant="top" src={NewYorkImage} className="popular-img" />
                                <Card.Body>
                                    <Card.Title className="hotel-title">The Montcalm At Brewery London City</Card.Title>
                                    <Card.Text className="hotel-location">Westminster Borough, London</Card.Text>
                                    <Row className="rating-row mb-2">
                                        <Col xs="auto" className="d-flex align-items-center">
                                            <Button variant="primary" className="rating-btn">4.7</Button>
                                        </Col>
                                        <Col className="d-flex flex-row align-items-center">
                                            <p className="rating-text mb-0">Exceptional</p>
                                            <p className="reviews-text mb-0">3014 reviews</p>
                                        </Col>
                                    </Row>
                                    <Card.Text className="price-text">Starting from <strong>US$72</strong></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/* Best  */}
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={icon1}></img>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h4 className='text-center'>Best Price Guarantee </h4>
                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={icon2}></img>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h4 className='text-center'>Easy & Quick Booking</h4>
                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={icon3}></img>
                            </div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h4 className='text-center'>Customer Care 24/7 </h4>
                                <p className='text-center mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <section className='top-comment'>
                {/* Top comment */}
                <Container>
                    <Row>
                        <Col>
                            <h2>What our customers are saying us?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>
                            <Row>
                                <Col>
                                    <div>
                                        <h1>13m+</h1>
                                        <p>Happy People</p>
                                    </div>
                                    <div>
                                        <h1>4.88</h1>
                                        <p>Overall rating</p>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    );
};

export default Home;
