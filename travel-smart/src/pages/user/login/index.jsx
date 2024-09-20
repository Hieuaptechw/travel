import React, { useState } from "react";
import "./signup.css";
import Form from 'react-bootstrap/Form';
import { FaFacebookF, FaGoogle, FaUnderline } from 'react-icons/fa'; // Import icons
import { Container, Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
const LoginPage = () => {
  // State hooks for form fields
  

  return (
    <div className="login">
    <Container fluid="lg">
    <Row className="justify-content-center p-5">
        <Col md={8} lg={6} >
            <Form className="login-form">
                <div className="form-header">
                    <h2>Welcome back</h2>
                    <p>Already have an account? <a className="login-link" href="#">Log in</a></p>
                </div>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="input-field" type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="input-field" type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                    Sign In
                </Button>
                <div className="forgot-pass">
                    <a href="#">Forgot your password?</a>
                </div>
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
    </div>
  );
};

export default LoginPage;
