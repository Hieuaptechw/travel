import React from 'react';
import './TripPlan.scss';
import TripPlanCard from './TripPlanCard';

const TripPlan = () => {
    return (
        <div class="-trip-plan">
            <TripPlanCard>
                <h6 class="m-0">Home</h6>
                <p class="m-0">123 Road Street, Village City, Paris</p>
            </TripPlanCard>
            <TripPlanCard>
                <h6 class="m-0">Home</h6>
                <p class="m-0">123 Road Street, Village City, Paris</p>
            </TripPlanCard>
        </div>
    );
};

export default TripPlan;