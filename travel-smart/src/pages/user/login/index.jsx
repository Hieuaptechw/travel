import React from "react";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';

const LoginPage = () => {
  return (
    <section id="login">
      <Container fluid="lg">
        <Row className="justify-content-center py-5">
          <Col md={8} lg={6}>
            <Form className="login-form">
              <div className="form-header text-center">
                <h2>Welcome back</h2>
                <p>Don't have an account? <a className="login-link" href="#">Sign up</a></p>
              </div>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className="input-field" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="input-field" type="password" placeholder="Password" />
              </Form.Group>
              <Button className="submit-btn" variant="primary" type="submit">
                Sign In
              </Button>
              <div className="forgot-pass text-center">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="sub text-center">
                <span>or sign in with</span>
              </div>
              <div className="social-buttons d-flex justify-content-center mt-3">
                <Button className="social-btn facebook-btn me-2" style={{background: "white" color: ""}} type="button">
                  <FaFacebookF className="social-icon" /> Sign in with Facebook
                </Button>
                <Button className="social-btn google-btn" type="button">
                  <FaGoogle className="social-icon" /> Sign in with Google
                </Button>
              </div>
              <div className="sub-1 mt-4 text-center">
                <span>By signing in, you agree to our Terms of Service and Privacy Statement.</span>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;
