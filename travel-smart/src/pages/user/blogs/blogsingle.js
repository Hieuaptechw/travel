import React from 'react';
import './blogsingle.scss';
import { Container, Row, Col, Card, Image, Button, Form } from 'react-bootstrap';
import banner from '../../../assets/images/1.png';
import img10 from '../../../assets/images/10.png';
import img11 from '../../../assets/images/11.png';
import img12 from '../../../assets/images/p.png';
import img13 from '../../../assets/images/t.png';
import dislike from "../../../assets/images/dislike.svg";
import like from "../../../assets/images/like.svg";

const BlogSinglePage = () => {
    return (
        <div className="blog-single-page">
            <Container fluid="md">
                {/* Title Section */}
                <Row className="mb-4">
                    <Col className="text-center">
                        <div className='single__top'>
                            <span className='single__subsm'>Art</span>
                            <h2 className='single__title'>
                                10 European Ski Destinations You Should Visit This Winter
                            </h2>
                            <span className='single__sub'>Jan 06, 2023</span>
                        </div>
                    </Col>
                </Row>

                {/* Banner Section */}
                <Row className="mb-4">
                    <Col className="text-center">
                        <Image src={banner} fluid style={{ borderRadius: "9px", width: "100%" }} />
                    </Col>
                </Row>

                {/* Content Section */}
                <Row>
                    <Col>
                        <div className='single__contents'>
                            <h3 className='single__contents_title'>
                                What Makes a Good Brand Book?
                            </h3>
                            <p>
                                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit.
                            </p>
                            <ul className="single__contents_list">
                                <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
                                <li>At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur.</li>
                                <li>Magna etiam tempor orci eu lobortis elementum.</li>
                                <li>Bibendum est ultricies integer quis. Semper eget duis at tellus.</li>
                            </ul>
                            <blockquote className='single__quote'>
                                <div className="quote__line bg-blue-1"></div>
                                <h4>
                                    “Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit.“
                                </h4>
                            </blockquote>
                            <p>
                                Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate.
                            </p>

                            {/* Images Section */}
                            <div className='single__contents_img d-flex justify-content-between'>
                                <Image src={img10} className="content-image" rounded fluid />
                                <Image src={img11} className="content-image" rounded fluid />
                            </div>

                            {/* Social Media and Tags Section */}
                            <div className='single__contents_media d-flex justify-content-between align-items-center mt-3'>
                                <ul className='media__links d-flex p-0'>
                                    <li><a href='#'><span>Share</span></a></li>
                                    <li><a href='#'><i className="bi bi-facebook"></i></a></li>
                                    <li><a href='#'><i className="bi bi-twitter"></i></a></li>
                                    <li><a href='#'><i className="bi bi-instagram"></i></a></li>
                                    <li><a href='#'><i className="bi bi-pinterest"></i></a></li>
                                </ul>
                                <ul className='media__links d-flex p-0'>
                                    <li><a href='#'>Art</a></li>
                                    <li><a href='#'>Beaches</a></li>
                                    <li><a href='#'>Adventure</a></li>
                                </ul>
                            </div>

                            {/* Author Section */}
                            <Row className='blogs__customer mt-4'>
                                <Col xs={3} sm={2} lg={2}>
                                    <div className='blogs__avt'>
                                        <Image src={img12} roundedCircle fluid />
                                    </div>
                                </Col>
                                <Col xs={9} sm={10} lg={10} className='p-0'>
                                    <div className='blogs__info'>
                                        <h3 className='blogs__name'>Brooklyn Simmons</h3>
                                        <span className='blogs__job'>Medical Assistant</span>
                                        <p>
                                            Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut.
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            {/* Reviews Section */}
                            <Row className="mt-4">
                                <Col>
                                    <h3 className='m-0 blog__reviews_sub'>9.2 Superb</h3>
                                    <p className='m-0'>
                                        Nice two level apartment in great London location. Located in quiet small street.
                                    </p>
                                    <div className='interact d-flex align-items-center mt-2'>
                                        <div className='like-group d-flex align-items-center me-3'>
                                            <img src={like} className='like' alt="like" />
                                            <span className='like-text'>Helpful</span>
                                        </div>
                                        <div className='dislike-group d-flex align-items-center'>
                                            <img src={dislike} className='dislike' alt="dislike" />
                                            <span className='dislike-text'>Not helpful</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            {/* Button Section */}
                            <Row className="mt-4">
                                <Col>
                                    <Button variant="primary" href="#">
                                        Show all 116 reviews
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <div className="comment__form mt-4">
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Control style={{height: "80px"}}
                                                    type="text"
                                                    placeholder="Text"
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control style={{height: "80px"}}
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Control 
                                                as="textarea"
                                                placeholder="Write your comment"
                                                style={{ height: '200px' }}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Post comment
                                        </Button>
                                    </Form>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogSinglePage;
