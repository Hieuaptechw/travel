import React from 'react';
import './TripPlanCard.scss';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const TripPlanCard = ({icon, children, color, ...props}) => {
    return (
        <article style={{"--accent": color}} class="-trip-plan-card border rounded-2" {...props}>
            <div class="-trip-plan-card-circle">
                <Icon icon={icon} class="-trip-plan-card-icon" />
            </div>
            {children}
        </article>
    );
};

export default TripPlanCard;