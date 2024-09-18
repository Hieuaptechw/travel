import React from 'react';
import './HotelPage.scss';
import TripPlanner from '../../../components/user/common/TripPlanner';
import HotelFilters from '../../../components/user/hotel/HotelFilters';
import HotelList from '../../../components/user/hotel/HotelList';

const HotelPage = () => {
    return (
        <div class="container">
            <div class="my-5">
                <h1 class="text-center fs-2 mb-3">Find Your Dream Luxury Hotel</h1>
                <TripPlanner />
            </div>
            <div class="row-lg">
                <div class="col col-lg-3">
                    <HotelFilters />
                </div>
                <div class="col col-lg-9">
                    <HotelList />
                </div>
            </div>
        </div>
    );
};

export default HotelPage;