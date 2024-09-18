import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <section>
            <Container>
                <Row className='my-3'>
                    <Col>
                        <h1>Popular Destinations</h1>
                        <p>These popular destinations have a lot to offer</p>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                       <button className='view-all'>View All Destinations</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;