import React from 'react';
import HotelListCard from './HotelListCard';

const HotelList = ({data}) => {
    return (
        <div class="-hotel-list">
            {data.map(x => <HotelListCard data={x} />)}
        </div>
    );
};

export default HotelList;