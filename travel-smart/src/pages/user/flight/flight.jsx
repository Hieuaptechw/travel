import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './flight.scss';
import { useState } from 'react';
import TripPlanner from '../../../components/user/common/TripPlanner';
import FlightPlanner from '../../../components/user/common/FlightPlanner,';
import TourFilters from '../../../components/user/tour/TourFilters';
import TourList from '../../../components/user/tour/TourList';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import PageControl from '../../../components/user/common/PageControl';
const flights = [
    {
      departureTime: "14:00",
      departureAirport: "SAW",
      arrivalTime: "18:05",
      arrivalAirport: "IST",
      duration: "4h 05m",
      price: "US$934",
      details: "16 details",
    },
    {
      departureTime: "10:00",
      departureAirport: "JFK",
      arrivalTime: "14:30",
      arrivalAirport: "LHR",
      duration: "7h 30m",
      price: "US$1,200",
      details: "20 details",
    },
  ];
const FlightPage = () => {
      const [filtersShown, setFilterShown] = useState(false);
    return (
        <div class="container">
            <div class="my-5">
                <FlightPlanner />
            </div>
            <div class="row-lg d-lg-flex">
                <div class={
                    "-filter-aside col col-lg-3 flex-shrink-1 me-lg-4 mb-lg-4"
                    + (filtersShown ? " show" : "")
                }>
                    <button className='btn d-flex align-items-center d-lg-none p-2 mb-4'
                        onClick={() => setFilterShown(false)}
                    >
                        <Icon icon="flowbite:close-outline" class="fs-3" />
                    </button>
                    <TourFilters />
                </div>
                <div class="col col-lg-9 flex-shrink-1">
                <Row className="align-items-center d-flex border p-3 flight__items">
          {flights.map((flight, index) => (
            <>
              {/* Departure Time and Airport */}
              <Col className="d-flex flex-column col-1 text-center">
                <h3>{flight.departureTime}</h3>
                <h5 className="text-muted">{flight.departureAirport}</h5>
              </Col>

              {/* Flight Information */}
              <Col className="flight-plane col-5 d-flex flex-column">
                <div>
                  <p className="text-center mt-3">Nonstop</p>
                </div>
                <div className="flight-line"></div>
              </Col>

              {/* Arrival Time and Airport */}
              <Col className="d-flex flex-column col-2 text-center">
                <h3>{flight.arrivalTime}</h3>
                <h5 className="text-muted">{flight.arrivalAirport}</h5>
              </Col>

              {/* Duration */}
              <Col className="col-2 text-center">
                <p className="text-muted">{flight.duration}</p>
              </Col>

              {/* Price and Details */}
              <Col className="col-2 d-flex flex-column align-items-center text-center mb-3">
                <h1>{flight.price}</h1>
                <p className="mb-0 text-muted">{flight.details}</p>
                <button className="btn btn-dark mt-2">View Details</button>
              </Col>
            </>
          ))}
        </Row>
        <Row className="align-items-center d-flex border p-3 flight__items">
          {flights.map((flight, index) => (
            <>
              {/* Departure Time and Airport */}
              <Col className="d-flex flex-column col-1 text-center">
                <h3>{flight.departureTime}</h3>
                <h5 className="text-muted">{flight.departureAirport}</h5>
              </Col>

              {/* Flight Information */}
              <Col className="flight-plane col-5 d-flex flex-column">
                <div>
                  <p className="text-center mt-3">Nonstop</p>
                </div>
                <div className="flight-line"></div>
              </Col>

              {/* Arrival Time and Airport */}
              <Col className="d-flex flex-column col-2 text-center">
                <h3>{flight.arrivalTime}</h3>
                <h5 className="text-muted">{flight.arrivalAirport}</h5>
              </Col>

              {/* Duration */}
              <Col className="col-2 text-center">
                <p className="text-muted">{flight.duration}</p>
              </Col>

              {/* Price and Details */}
              <Col className="col-2 d-flex flex-column align-items-center text-center mb-3">
                <h1>{flight.price}</h1>
                <p className="mb-0 text-muted">{flight.details}</p>
                <button className="btn btn-dark mt-2">View Details</button>
              </Col>
            </>
          ))}
        </Row>
        <Row className="align-items-center d-flex border p-3 flight__items">
          {flights.map((flight, index) => (
            <>
              {/* Departure Time and Airport */}
              <Col className="d-flex flex-column col-1 text-center">
                <h3>{flight.departureTime}</h3>
                <h5 className="text-muted">{flight.departureAirport}</h5>
              </Col>

              {/* Flight Information */}
              <Col className="flight-plane col-5 d-flex flex-column">
                <div>
                  <p className="text-center mt-3">Nonstop</p>
                </div>
                <div className="flight-line"></div>
              </Col>

              {/* Arrival Time and Airport */}
              <Col className="d-flex flex-column col-2 text-center">
                <h3>{flight.arrivalTime}</h3>
                <h5 className="text-muted">{flight.arrivalAirport}</h5>
              </Col>

              {/* Duration */}
              <Col className="col-2 text-center">
                <p className="text-muted">{flight.duration}</p>
              </Col>

              {/* Price and Details */}
              <Col className="col-2 d-flex flex-column align-items-center text-center mb-3">
                <h1>{flight.price}</h1>
                <p className="mb-0 text-muted">{flight.details}</p>
                <button className="btn btn-dark mt-2">View Details</button>
              </Col>
            </>
          ))}
        </Row>
                   
                    <PageControl />
                </div>
            </div>
        </div>
    );
};

export default FlightPage;