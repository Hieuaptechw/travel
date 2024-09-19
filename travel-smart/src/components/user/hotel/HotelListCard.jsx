import React from 'react';
import "./HotelListCard.scss";
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const HotelListCard = ({ data }) => {
    return (
        <article class="-hotel-list-card d-md-flex border-top mt-4 pt-4">
            <div class="-hotel-card-image col-md-3">
                <img src={data.image} class="rounded-2 w-100" alt="image" />
            </div>
            <div class="-hotel-card-info d-md-flex ms-md-3">
                <div class="flex-fill mt-2 mt-md-0">
                    <div>
                        <h5 className="m-0">{data.hotelName}</h5>
                        <p className="opacity-75 m-0"><small>
                            {data.hotelLocation}
                            &ensp;&bull;&ensp;
                            {data.hotelDistance[0]}{data.hotelDistance[1]} to {data.hotelDistance[2]}
                        </small></p>
                    </div>
                    <div className='mt-2'>
                        <h6 className="m-0">{data.roomName}</h6>
                        <p className="opacity-75 m-0"><small>
                            {data.roomFeature}
                        </small></p>
                    </div>
                    <div className='mt-2 text-success'>
                        <h6 className="m-0">{data.deal[0]}</h6>
                        <p className="opacity-75 m-0"><small>
                            {data.deal[1]}
                        </small></p>
                    </div>
                    <div className='mt-2'>
                        {data.amenities.map(x => <><small className="d-inline-block py-1 px-2 rounded-pill border">{x}</small>&ensp;</>)}
                    </div>
                </div>
                <div class="flex-fill text-md-end mt-2 mt-md-0 ms-md-2">
                    <div className="d-inline-flex">
                        <small className='d-block'>
                            <h6 className="m-0">Exceptional</h6>
                            <p className="opacity-75 m-0">{data.ratingCount} ratings</p>
                        </small>
                        <div className="-hotel-card-rating d-flex ms-2 justify-content-center align-items-center fs-5 bg-primary text-white rounded-1 square">
                            {data.rating.toFixed(1)}
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className="opacity-75 m-0"><small>
                            {data.duration} nights&ensp;&bull;&ensp;
                            {data.capacity[0]} adults
                            {data.capacity[1] > 0 && <>&ensp;&bull;&ensp;{data.capacity[1]} children</>}
                        </small></p>
                        <p className="m-0 lh-13">
                            <span className="fw-bolder">{data.nightPrice[1]} </span>
                            <big className='fs-4 fw-bolder'>{data.nightPrice[0]}</big>
                            <big className='fs-4'> / </big>night
                        </p>
                        <p className="opacity-75 m-0"><small>
                            +<span className="fw-bolder">{data.extraPrice[1]} {data.extraPrice[0]}</span>
                            {" "}taxes and charges
                        </small></p>
                    </div>
                    <div className='mt-2'>
                        <button className="btn btn-primary d-flex-center w-100 text-nowrap">
                            View availability
                            <Icon icon="radix-icons:arrow-top-right" inline class="fs-4 ms-1" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default HotelListCard;