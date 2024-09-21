import React from 'react';
import "./CarListCard.scss";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const CarListCard = ({ data }) => {
    return (
        <article class="-car-list-card d-md-flex border-top mt-4 pt-4">
            <div class="-car-card-image col-md-3">
                <img src={data.image} class="rounded-2 w-100" alt="image" />
            </div>
            <div class="-car-card-info flex-fill d-md-flex ms-md-3">
                <div class="flex-fill mt-2 mt-md-0">
                    <div>
                        <p className="opacity-75 m-0"><small>
                            {data.supplier}
                            &ensp;&bull;&ensp;
                            {data.type}
                        </small></p>
                        <h5 className="m-0">{data.model}</h5>
                    </div>
                    <div class="mt-2 g-1 row">
                        <div class="col-6 d-flex align-items-center">
                            <Icon icon="ph:user" class="me-2" aria-label='Seats' />
                            <span>{data.seats}</span>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                            <Icon icon="bi:luggage" class="me-2" aria-label='Luggage capacity' />
                            <span>{data.luggage}</span>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                            <Icon icon="mdi:barometer" class="me-2" aria-label='Coverage' />
                            <span>{data.coverage}</span>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                            <Icon icon="tabler:manual-gearbox" class="me-2" aria-label='Transmission' />
                            <span>{data.transmission}</span>
                        </div>
                        {data.specifications.map((x, i) => <div key={i} class="col-6 d-flex align-items-center">
                            <Icon icon="mdi:sparkles" class="me-2" aria-label='Specification' />
                            <span>{x}</span>
                        </div>)}
                    </div>
                    <div class="mt-2 g-1 row">
                        <div class="d-flex align-items-center">
                            <Icon icon="ion:checkmark" class="me-2" aria-label='Waranty' />
                            <span>{data.waranty}</span>
                        </div>
                        <div class="d-flex align-items-center text-success">
                            <Icon icon="ion:checkmark" class="me-2" />
                            <span>{data.deal}</span>
                        </div>
                    </div>
                </div>
                <div class="flex-fill text-md-end mt-2 mt-md-0 ms-md-2">
                    <div className="d-inline-flex">
                        <small className='d-block'>
                            <h6 className="m-0">Exceptional</h6>
                            <p className="opacity-75 m-0">{data.ratingCount} ratings</p>
                        </small>
                        <div className="-car-card-rating d-flex ms-2 justify-content-center align-items-center fs-5 bg-primary text-white rounded-1 square">
                            {data.rating.toFixed(1)}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className="m-0 lh-13 text-nowrap">
                            <span className="fw-bolder">{data.pricePerDistance[1]} </span>
                            <big className='fs-4 fw-bolder'>{data.pricePerDistance[0]}</big>
                            <big className='fs-4'> / </big>{data.pricePerDistance[2]}
                        </p>
                    </div>
                    <div className='mt-2'>
                        <Link to="/cars/1">
                        <button className="btn btn-primary d-flex-center w-100 text-nowrap">
                            More details
                            <Icon icon="radix-icons:arrow-top-right" inline class="fs-4 ms-1" />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CarListCard;