import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CardImg from '../../../assets/images/5.png';
import CardImg1 from '../../../assets/images/6.png';
import CardImg2 from '../../../assets/images/7.png';
import CardImg3 from '../../../assets/images/8.png';
import CardImg4 from '../../../assets/images/9.png';
import './blogs.scss';

const blogPage = () => {
    const blogs = [
        {
            id: 1,
            date: 'Jan 06, 2023',
            title: 'Booking travel during Corona: good advice in an uncertain time',
            text: 'For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.',
            imgSrc: CardImg
        },
        {
            id: 2,
            date: 'April 06, 2022',
            title: 'Where can I go? 5 amazing countries that are open right now',
            text: 'For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.',
            imgSrc: CardImg1
        },
        {
            id: 3,
            date: 'Jan 06, 2023',
            title: '10 European ski destinations you should visit this winter',
            text: 'For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.',
            imgSrc: CardImg2
        },
        {
            id: 4,
            date: 'April 06, 2022',
            title: 'Where can I go? 5 amazing countries that are open right now',
            text: 'For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.',
            imgSrc: CardImg3
        },
        {
            id: 5,
            date: 'April 06, 2022',
            title: 'Booking travel during Corona: good advice in an uncertain time',
            text: 'For decades, travelers have been escaping to the Catskills — a mountainous region in upstate New York — whenever they’ve needed a reset.',
            imgSrc: CardImg4
        }
    ];

    return (
        <Container fluid="md">
            <Row className="mb-4">
                <Col>
                    <div className='title text-center p-3'>
                        <h1 className='blogs__title p-4'>Travel articles</h1>
                        <span className='blogs__titlesub p-3'>Lorem ipsum is placeholder text commonly used in site.</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={8} sm={12} xs={12}>
                    {blogs.map((item) => (
                        <Card key={item.id} className="mb-4" style={{border: '0'}}>
                            <Row noGutters>
                                <Col md={4}>
                                    <Card.Img src={item.imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Text className="text-muted">{item.date}</Card.Text>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
                <Col lg={3} md={4} sm={12} xs={12}>
                    <div className='navbar__blogs'>
                        <div className='navbar__blogs_top mb-4'>
                            <h4>Search</h4>
                            <div className="search-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <i className="bi bi-search search-icon"></i>
                            </div>
                        </div>
                        <div className='navbar__blogs_main mb-4'>
                            <h4>Categories</h4>
                            <div className='navbar__blogs_categories d-flex justify-content-between'>
                                <span>Hotel</span>
                                <span>92</span>
                            </div>
                            <div className='navbar__blogs_categories d-flex justify-content-between'>
                                <span>Hotel</span>
                                <span>92</span>
                            </div>
                            <div className='navbar__blogs_categories d-flex justify-content-between'>
                                <span>Hotel</span>
                                <span>92</span>
                            </div>
                            <div className='navbar__blogs_categories d-flex justify-content-between'>
                                <span>Hotel</span>
                                <span>92</span>
                            </div>
                        </div>
                        <div className='navbar__blogs_main'>
                            <h4>Recent Posts</h4>
                            <div className='navbar__blogs_post'>
                                {blogs.slice(0, 5).map((item) => (
                                    <Card key={item.id} className="mb-3" style={{ width: '100%', height: '7rem', overflow: 'hidden', border: 'none' }}>
                                        <Row noGutters>
                                            <Col xs={5}>
                                                <Card.Img src={item.imgSrc} style={{ width: '100%', height: '8rem', objectFit: 'cover' }} />
                                            </Col>
                                            <Col xs={7}>
                                                <Card.Body className="d-flex flex-column justify-content-center p-1">
                                                    <Card.Text className="text-muted">{item.date}</Card.Text>
                                                    <Card.Title style={{ fontSize: '0.875rem' }}>{item.title}</Card.Title>
                                                    
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default blogPage;
