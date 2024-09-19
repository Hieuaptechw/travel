import React from 'react';
import "./TourListCard.scss";
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const TourListCard = ({ data }) => {
    return (
        <article class="-tour-list-card d-md-flex border-top mt-4 pt-4">
            <div class="-tour-card-image col-md-3">
                <img src={data.image} class="rounded-2 w-100" alt="image" />
            </div>
            <div class="-tour-card-info d-md-flex ms-md-3">
                <div class="flex-fill mt-2 mt-md-0">
                    <div>
                        <p className="opacity-75 m-0"><small>
                            {data.duration[0]}+ {data.duration[1]}
                            &ensp;&bull;&ensp;
                            {data.times}
                        </small></p>
                        <h5 className="m-0">{data.tourName}</h5>
                        <p className="opacity-75 m-0"><small>
                            {data.tourLocation}
                        </small></p>
                    </div>
                    <div className='mt-2'>
                        <div className="m-0 fw-600 ">{data.waranty}</div>
                        <div className="m-0 fw-600 text-success">{data.deal}</div>
                    </div>
                </div>
                <div class="flex-fill text-md-end mt-2 mt-md-0 ms-md-2">
                    <div className="d-inline-flex">
                        <small className='d-block'>
                            <h6 className="m-0">Exceptional</h6>
                            <p className="opacity-75 m-0">{data.ratingCount} ratings</p>
                        </small>
                        <div className="-tour-card-rating d-flex ms-2 justify-content-center align-items-center fs-5 bg-primary text-white rounded-1 square">
                            {data.rating.toFixed(1)}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className="m-0 lh-13 text-nowrap">
                            From{" "}
                            <span className="fw-bolder">{data.adultPrice[1]} </span>
                            <big className='fs-4 fw-bolder'>{data.adultPrice[0]}</big>
                            <big className='fs-4'> / </big>adult
                            <br />
                            From{" "}
                            <span className="fw-bolder">{data.childPrice[1]} </span>
                            <big className='fs-4 fw-bolder'>{data.childPrice[0]}</big>
                            <big className='fs-4'> / </big>child
                        </p>
                    </div>
                    <div className='mt-2'>
                        <button className="btn btn-primary d-flex-center w-100 text-nowrap">
                            More details
                            <Icon icon="radix-icons:arrow-top-right" inline class="fs-4 ms-1" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default TourListCard;