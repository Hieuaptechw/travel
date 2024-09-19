import React from 'react';
import './TripPlanCard.scss';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const TripPlanCard = ({icon, children, ...props}) => {
    return (
        <article class="-trip-plan-card border border-primary-subtle rounded-2" {...props}>
            <div class="-trip-plan-card-circle">
                <Icon icon={icon} class="-trip-plan-card-icon" />
            </div>
            {children}
        </article>
    );
};

export default TripPlanCard;