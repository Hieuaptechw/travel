import React from 'react';
import TourListCard from './TourListCard';

const TourList = ({data}) => {
    return (
        <div class="-tour-list">
            {data.map(x => <TourListCard data={x} />)}
        </div>
    );
};

export default TourList;