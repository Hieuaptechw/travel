import React from 'react';
import './login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaFacebookF, FaGoogle } from 'react-icons/fa'; // Import icons

const LoginPage = () => {
    return (
        <section id="login">
            <Container fluid="lg">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Form className="login-form">
                            <div className="form-header">
                                <h2>Welcome back</h2>
                                <p>Already have an account? <a className="login-link" href="#">Log in</a></p>
                            </div>
                            <Form.Group className="mb-4" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className="input-field" type="text" placeholder="Enter your first name" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control className="input-field" type="text" placeholder="Enter your last name" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="input-field" type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="input-field" type="password" placeholder="Enter your password" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control className="input-field" type="password" placeholder="Confirm your password" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                                <Form.Check className="checkbox-field" type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className="submit-btn" variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <div className='sub'>
                                <span className='text-center'>or sign in with</span>
                            </div>
                          
                            <div className="social-buttons d-flex justify-content-between">
                                
                                <Button className="social-btn facebook-btn" variant="outline-primary" type="button">
                                    <FaFacebookF className="social-icon" /> Sign up with Facebook
                                </Button>

                                <Button className="social-btn google-btn " variant="outline-danger" type="button">
                                    <FaGoogle className="social-icon" /> Sign up with Google
                                </Button>
                            </div>
                            <div className='sub-1'>
                                <span className='text-center'>By creating an account, you agree to our Terms of Service and Privacy Statement.</span>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LoginPage;
