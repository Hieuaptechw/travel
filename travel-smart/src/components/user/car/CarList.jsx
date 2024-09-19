import React from 'react';
import CarListCard from './CarListCard';

const CarList = ({data}) => {
    return (
        <div class="-car-list">
            {data.map(x => <CarListCard data={x} />)}
        </div>
    );
};

export default CarList;