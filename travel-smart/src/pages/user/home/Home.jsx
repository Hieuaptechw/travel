import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import NewYorkImage from "../../../assets/images/NewYork.jpg";
import London from "../../../assets/images/London.png";
import Barcelona from "../../../assets/images/Barcelona.jpg";
import Sydney from "../../../assets/images/Sydney.jpg";
import Tokyo from "../../../assets/images/Tokyo.jpg";
import Paris from "../../../assets/images/Paris.jpg";
import icon1 from "../../../assets/images/1.svg";
import icon2 from "../../../assets/images/2.svg";
import icon3 from "../../../assets/images/3.svg";
import { getHotels } from "../../../services/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg from "../../../assets/images/bg.jpg";
import "./Home.scss";
import ReactStars from "react-stars";
import TripPlanner from "../../../components/user/common/TripPlanner";

const Home = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerRow = 3;
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await getHotels();

        if (response && response.data) {
          setHotels(Object.values(response.data));
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);
  console.log(hotels);
  return (
    <>
      <section class="home-banner">
        <img src={bg} alt="Background Image" class="home-banner-image" />
        <div class="home-banner-bg" />
        <div class="home-banner-content container">
          <h1 class="text-light text-center mb-4">Plan your next trip</h1>
          <TripPlanner />
        </div>
      </section>

      <section>
        <Container class="overflow-hidden px-3">
          {/* Popular */}
          <Row className="my-5">
            <Col xs={12} md={6}>
              <h1>Popular Destinations</h1>
              <p>These popular destinations have a lot to offer</p>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
              <button className="view-all">View All Destinations</button>
            </Col>
          </Row>
    
            <Slider {...settings}>
              {Object.values(hotels).map((hotel) => (
                <div key={hotel.id}>
                  <Card className="mb-4 slider-card">
                    <Card.Img
                      variant="top"
                      src={hotel.images && hotel.images.length > 0 ? hotel.images[0].image_url : 'default-image-url.jpg'}
                      className="popular-img"
                    />
                    <Card.Body>
                      <Card.Title>{hotel.name}</Card.Title>
                      <Card.Text>{hotel.address}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>

          {/* Discount */}
          <Row className="my-5">
            <Col xs={12} lg={6}>
              <div className="custom-card item1">
                <div className="overlay">
                  <h2>Things To Do On Your Trip</h2>
                  <Button variant="light" className="btn-overlay">
                    Learn More
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="custom-card item2">
                <div className="overlay">
                  <h2>Enjoy Summer Deals</h2>
                  <h3>Up to 70% Discount!</h3>
                  <Button variant="light" className="btn-overlay">
                    Learn More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Recommend */}
          <Row className="my-5">
            <Col xs={12} lg={6}>
              <h1>Recommended</h1>
              <p>Interdum et malesuada fames ac ante ipsum</p>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-end align-items-center">
              <select className="select">
                <option value="Hotel">Hotel</option>
              </select>
            </Col>
          </Row>
          <Slider {...settings}>
            {[...new Array(4)].map((x) => (
              <Card className="mb-4 slider-card hotel-card">
                <Card.Img
                  variant="top"
                  src={NewYorkImage}
                  className="popular-img"
                />
                <Card.Body>
                  <Card.Title className="hotel-title">
                    The Montcalm At Brewery London City
                  </Card.Title>
                  <Card.Text className="hotel-location">
                    Westminster Borough, London
                  </Card.Text>
                  <Row className="rating-row mb-2">
                    <Col xs="auto" className="d-flex align-items-center">
                      <Button variant="primary" className="rating-btn">
                        4.7
                      </Button>
                    </Col>
                    <Col className="d-flex flex-row align-items-center">
                      <p className="rating-text mb-0">Exceptional</p>
                      <p className="reviews-text mb-0">3014 reviews</p>
                    </Col>
                  </Row>
                  <Card.Text className="price-text">
                    Starting from <strong>US$72</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
          <Row className="my-4 pt-5">
            <Col xs={12} lg={4}>
              <div className="d-flex justify-content-center">
                <img src={icon1}></img>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h4 className="text-center">Best Price Guarantee </h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="d-flex justify-content-center">
                <img src={icon2}></img>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h4 className="text-center">Easy & Quick Booking</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="d-flex justify-content-center">
                <img src={icon3}></img>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h4 className="text-center">Customer Care 24/7 </h4>
                <p className="text-center mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="top-comment my-5">
        {/* Top comment */}
        <Container className="comment">
          <Row>
            <Col xs={12} lg={6}>
              <h2>What our customers are saying us?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo.
              </p>
              <Row>
                <Col className="d-flex justify-content-start align-items-center my-3">
                  <div className="col-5">
                    <h1 className="mr-4">13m+</h1>
                    <p>Happy People</p>
                  </div>
                  <div>
                    <h1>4.88</h1>
                    <p>Overall rating</p>
                    <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      color2={"#ffd700"}
                      edit={false}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <div className="d-flex align-items-center person-container">
                <img
                  src={NewYorkImage}
                  alt="Annette Black"
                  className="person mr-3"
                />
                <p className="mb-0 person-name">Annette Black</p>
              </div>
              <div>
                <h6>
                  The place is in a great location in Gumbet. The area is safe
                  and beautiful. The apartment was comfortable and the host was
                  kind and responsive to our requests. Really a nice place.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h1>Get inspiration for your next trip</h1>
              <p>Interdum et malesuada fames</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <img src={NewYorkImage} alt="New York" className="img-fluid" />
              <h3>10 European ski destinations you should visit this winter</h3>
              <p>Jan 06, 2023</p>
            </Col>
            <Col xs={12} md={4}>
              <img src={NewYorkImage} alt="New York" className="img-fluid" />
              <h3>10 European ski destinations you should visit this winter</h3>
              <p>Jan 06, 2023</p>
            </Col>
            <Col xs={12} md={4}>
              <img src={NewYorkImage} alt="New York" className="img-fluid" />
              <h3>10 European ski destinations you should visit this winter</h3>
              <p>Jan 06, 2023</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="all">
            <Nav variant="tabs" className="justify-content-start my-3">
              <Nav.Item>
                <Nav.Link eventKey="all">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="europe">Europe</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="asia">Asia</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="northAmerica">North America</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="all">
                <Row>
                  <Col md={3}>
                    <h3>Hawaii</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Istanbul</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>San Diego</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Reykjavik</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="europe">
                <Row>
                  <Col md={3}>
                    <h3>Paris</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>London</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Amsterdam</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <p>Prague</p>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="asia">
                <Row>
                  <Col md={3}>
                    <h3>Phuket</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Bangkok</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Tokyo</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Seoul</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="northAmerica">
                <Row>
                  <Col md={3}>
                    <h3>Los Angeles</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Boston</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>San Francisco</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                  <Col md={3}>
                    <h3>Miami</h3>
                    <p className="text-muted">12,683 properties</p>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};

export default Home;
