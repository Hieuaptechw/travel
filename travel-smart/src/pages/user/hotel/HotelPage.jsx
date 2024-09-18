import React from 'react';
import './HotelPage.scss';
import TripPlanner from '../../../components/common/TripPlanner';

const HotelPage = () => {
    return (
        <div class="container">
            <h1 class="text-center">Find Your Dream Luxury Hotel</h1>
            <TripPlanner />
        </div>
    );
};

export default HotelPage;