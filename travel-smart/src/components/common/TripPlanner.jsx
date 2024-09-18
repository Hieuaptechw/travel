import React from 'react';
import { Icon } from '@iconify-icon/react';

const TripPlanner = () => {
    return (
        <div class="-trip-planner d-block d-lg-flex bg-body text-dark shadow p-2 rounded-3">
            <div class="flex-fill mx-2">
                <label for="trip-planner-location" class="d-block"><h6 class="m-0">Location</h6></label>
                <input id="trip-planner-location" class="border-0 p-0 d-block w-100 outline-none" placeholder="Where are you going?" />
            </div>
            <div class="flex-fill mx-2">
                <h6 class="m-0">Check in - Check out</h6>
                <input class="border-0 p-0 d-block w-100 outline-none" placeholder="Where are you going?" />
            </div>
            <div class="flex-fill mx-2">
                <h6 class="m-0">Guests</h6>
                <input class="border-0 p-0 d-block w-100 outline-none" placeholder="Where are you going?" />
            </div>
            <button class="btn btn-primary d-flex align-items-center justfy-content-center">
                <Icon icon="mdi:search" class="fs-5" />
                Search
            </button>
        </div>
    );
};

export default TripPlanner;