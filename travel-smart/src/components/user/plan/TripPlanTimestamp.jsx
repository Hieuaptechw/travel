import React from 'react';
import './TripPlanTimestamp.scss';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const TripPlanTimestamp = ({what, when, icon, color}) => {
    return (
        <article style={{"--accent": color}} class="-trip-plan-timestamp border rounded-2">
            <div class="-trip-plan-timestamp-circle">
                <Icon icon={icon} class="-trip-plan-timestamp-icon" />
            </div>
            <div class="d-flex">
                <div class="flex-fill">{what}</div>
                <div class="text-end fw-bolder">{when}</div>
            </div>
        </article>
    );
};

export default TripPlanTimestamp;