import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './destination.scss'; // Import CSS file for additional styling
import banner from '../../../assets/images/1.png'; // Import banner image
import map from '../../../assets/images/map.png'; // Import map image

const DestinationPage = () => {
    return (
        <section id="destination">
            {/* Container to wrap all the content of the page */}
            <Container fluid="md" className="p-0">
                {/* Large banner section */}
                <Row noGutters>
                    <Col xs={12} className="banner d-flex">
                        <img src={banner} alt="Explore London" className="img-fluid" /> {/* Banner image */}
                        <div className="banner-title">
                            <h1 className="title">Explore London</h1> {/* Banner title */}
                            <span className="sub">Explore deals, travel guides and things to do in London</span> {/* Subtitle */}
                        </div>
                        <div className="banner-btn">
                            <Button variant="primary" href="#">See All 90 Photos</Button> {/* Button to view more photos */}
                        </div>
                    </Col>
                </Row>

                {/* Section with information about what to know before visiting London */}
                <Row>
                    <Col xs={12}>
                        <h2 className="mapping-title">What to know before visiting London</h2> {/* Section title */}
                    </Col>
                    <Col xl={8} className='p-0'>
                        <div className="mapping-text">
                            {/* Information about London */}
                            <p>London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that’s the envy of other global superpowers.. </p>
                            <p>Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions like the British Museum as well as see how far it has come by simply riding the Tube and passing by celebrated landmarks like Buckingham Palace, Westminster Abbey, and marvels like Big Ben, the London Eye, and the Tower Bridge.</p>
                            <p>You can also immerse yourself in its ever-evolving and impactful culture by visiting places like the National Gallery, the Tate Modern, West End, Abbey Road, the Royal Albert Hall, Oxford Street and the Westfield Shopping Centers, and areas referenced and seen in literature and film.</p>
                            <Button variant="primary" href="#">Show more</Button> {/* Button to show more information */}
                        </div>
                    </Col>
                    <Col xl={4} className='p-0'>
                        <div className="map">
                            <img src={map} alt="Map of London" className="img-fluid" /> {/* Map image */}
                        </div>
                    </Col>
                </Row>

                {/* Light top border */}
                <div className="border-top-light"></div>

                {/* Section with local weather information */}
                <Row>
                    <Col xs={12}>
                        <h2>Local weather</h2> {/* Section title */}
                    </Col>
                    {/* Weather information boxes */}
                    <Col xs={6} sm={3} className="pb-5">
                        <div className="temperature">17°<span className="text-light-1"> 3°</span></div> {/* Weather info */}
                    </Col>
                    <Col xs={6} sm={3} className="pb-5">
                        <div className="temperature">17°<span className="text-light-1"> 3°</span></div> {/* Weather info */}
                    </Col>
                    <Col xs={6} sm={3} className="pb-5">
                        <div className="temperature">17°<span className="text-light-1"> 3°</span></div> {/* Weather info */}
                    </Col>
                    <Col xs={6} sm={3} className="pb-5">
                        <div className="temperature">17°<span className="text-light-1"> 3°</span></div> {/* Weather info */}
                    </Col>
                </Row>

                {/* Light bottom border */}
                <div className="border-bottom-light"></div>

                {/* General information section */}
                <Row>
                    <Col xs={12}>
                        <h2>General info</h2> {/* Section title */}
                    </Col>
                    {/* General information boxes */}
                    <Col xs={6} xl={3} className="pb-5">
                        <div>Time Zone</div>
                        <div>GMT +00:00</div>
                        <div>3 hours behind</div>
                    </Col>
                    <Col xs={6} xl={3} className="pb-5">
                        <div>Time Zone</div>
                        <div>GMT +00:00</div>
                        <div>3 hours behind</div>
                    </Col>
                    <Col xs={6} xl={3} className="pb-5">
                        <div>Time Zone</div>
                        <div>GMT +00:00</div>
                        <div>3 hours behind</div>
                    </Col>
                </Row>
                {/* Light top border */}
                <div className="border-top-light"></div>
            </Container>
        </section>
    );
};

export default DestinationPage;
