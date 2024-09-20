import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer__top'>
        <Container fluid="md">
          <Row>
            <Col xs={12}>
              <div className='footer__top_contents d-flex justify-content-between align-items-center'>
                <div className='footer__top_title'>
                  <h2>Your Travel Journey Starts Here</h2>
                  <span>Sign up and we`'ll send the best deals to you</span>
                </div>
                <div className='footer__top_subscribe'>
                  <input className='footer__top_input' type='text' placeholder='Your Email' />
                  <button className='footer__top_btn'>Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer__main'>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <h4>About Us</h4>
              <ul>
                <li>
                  <div className='d-flex flex-column'>
                    <span>Toll Free Customer Care</span>
                    <a href='#'>+(1) 123 456 7890</a>
                  </div>
                </li>
                <li>
                  <div className='d-flex flex-column'>
                    <span>Need live support?</span>
                    <a href='#'>hi@gotrip.com</a>
                  </div>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>Company</h4>
              <ul>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Press</a></li>
                <li><a href='#'>Gift Cards</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>Support</h4>
              <ul>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Legal Notice</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Terms and Conditions</a></li>
                <li><a href='#'>Sitemap</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h4>Other Services</h4>
              <ul>
                <li><a href='#'>Car hire</a></li>
                <li><a href='#'>Activity Finder</a></li>
                <li><a href='#'>Tour List</a></li>
                <li><a href='#'>Flight finder</a></li>
                <li><a href='#'>Cruise Ticket</a></li>
                <li><a href='#'>Holiday Rental</a></li>
                <li><a href='#'>Travel Agents</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='footer__below d-flex align-items-center justify-content-between flex-wrap'>
                <ul className='footer__below_link d-flex align-items-center'>
                  <li><p>&copy; 2024 by c2309g &nbsp; All rights reserved.</p></li>
                  <li><a href='#'>Privacy</a></li>
                  <li><a href='#'>Terms</a></li>
                  <li><a href='#'>Site Map</a></li>
                </ul>
                <ul className='footer__below_link d-flex align-items-center'>
                  <li><i className="bi bi-globe-americas"></i><a href='#'>English (US)</a></li>
                  <li><a href='#'><i className="bi bi-facebook"></i></a></li>
                  <li><a href='#'><i className="bi bi-twitter"></i></a></li>
                  <li><a href='#'><i className="bi bi-instagram"></i></a></li>
                  <li><a href='#'><i className="bi bi-pinterest"></i></a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
