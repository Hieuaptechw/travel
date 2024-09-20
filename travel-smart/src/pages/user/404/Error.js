import React from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import "./Error.scss";
import banner404 from "../../../assets/images/404.svg";
const ErrorPage = () => {
    return (
        <div className='error__main'>
            <Container fluid="md">
                <Row>
                    <Col>
                        <img src={banner404} />
                    </Col>
                    <Col style={{ paddingLeft: "150px" }}>
                        <div className='oops__title text-center'>
                            <h3 className='d-flex justify-content-start'>40<p>4</p></h3>
                        </div>
                        <span>Oops! It looks like you're lost.</span>
                        <p>The page you're looking for isn't available. Try to search again or use the go to.</p>
                        <button className='btn btn-primary'>Go back to homepage</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ErrorPage;