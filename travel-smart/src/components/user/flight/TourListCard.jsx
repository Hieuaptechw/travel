import React from 'react';
import "./TourListCard.scss";
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { Link } from 'react-router-dom';

const TourListCard = ({ data }) => {
    return (
        <article class="-tour-list-card d-md-flex border-top mt-4 pt-4">
            <div class="-tour-card-image col-md-3">
                <img src={data.image} class="rounded-2 w-100" alt="image" />
            </div>
            <div class="-tour-card-info flex-fill d-md-flex ms-md-3">
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
                <div className="flex-fill text-md-end mt-2 mt-md-0 ms-md-2">
  <div className="d-inline-flex">
    <small className="d-block">
      <h6 className="m-0">Excellent Flight</h6> {/* Đổi thành tiêu đề về chuyến bay */}
      <p className="opacity-75 m-0">{data.ratingCount} reviews</p> {/* Đổi thành số lượng review */}
    </small>
    <div className="-tour-card-rating d-flex ms-2 justify-content-center align-items-center fs-5 bg-primary text-white rounded-1 square">
      {data.rating.toFixed(1)} {/* Đổi thành số điểm đánh giá */}
    </div>
  </div>

  <div className="mt-2">
    <p className="m-0 lh-13 text-nowrap">
      From{" "}
      <span className="fw-bolder">{data.flightPrice[1]} </span> {/* Giá cho người lớn */}
      <big className="fs-4 fw-bolder">{data.flightPrice[0]}</big>
      <big className="fs-4"> / </big>person
      <br />
      From{" "}
      <span className="fw-bolder">{data.childFlightPrice[1]} </span> {/* Giá cho trẻ em */}
      <big className="fs-4 fw-bolder">{data.childFlightPrice[0]}</big>
      <big className="fs-4"> / </big>child
    </p>
  </div>

  <div className="mt-2">
    <Link to="/flights/1"> {/* Chuyển link sang flights */}
      <button className="btn btn-primary d-flex-center w-100 text-nowrap">
        More details
        <Icon icon="radix-icons:arrow-top-right" inline className="fs-4 ms-1" />
      </button>
    </Link>
  </div>
</div>

            </div>
        </article>
    );
};

export default TourListCard;