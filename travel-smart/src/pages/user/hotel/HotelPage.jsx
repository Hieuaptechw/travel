import React, { useState } from 'react';
import './HotelPage.scss';
import TripPlanner from '../../../components/user/common/TripPlanner';
import HotelFilters from '../../../components/user/hotel/HotelFilters';
import HotelList from '../../../components/user/hotel/HotelList';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const data = [...new Array(10)].map(x => (
    {
        image: "https://placehold.co/400x300",
        hotelName: "Great Northern Hotel, a Tribute Portfolio Hotel, London",
        hotelLocation: "Westminster Borough, London",
        hotelDistance: [2, "km", "city center"],
        roomName: "King Room",
        roomFeature: "1 extra-large double bed",
        deal: ["Free cancellation", "You can cancel later, so lock in this great price today."],
        amenities: ["WiFi", "Breakfast", "Spa", "Bar"],
        rating: 9.6,
        ratingCount: 1024,
        duration: 8,
        capacity: [2, 1],
        nightPrice: [72, "USD"],
        extraPrice: [72, "USD"],
    }
));

const HotelPage = () => {

    const [filtersShown, setFilterShown] = useState(false);

    return (
        <div class="container">
            <div class="my-5">
                <h1 class="text-center fs-2 mb-3">Find Your Dream Luxury Hotel</h1>
                <TripPlanner />
            </div>
            <div class="row-lg d-lg-flex">
                <div class={
                    "-hotel-page-aside col col-lg-3 flex-shrink-1 me-lg-4 mb-4"
                    + (filtersShown ? " show" : "")
                }>
                    <button className='btn d-flex align-items-center d-lg-none p-2 mb-4'
                        onClick={() => setFilterShown(false)}
                    >
                        <Icon icon="flowbite:close-outline" class="fs-3" />
                    </button>
                    <HotelFilters />
                </div>
                <div class="col col-lg-9 flex-shrink-1">
                    <div class="d-md-flex align-items-center flex-wrap">
                        <h5 className="my-3"><b>1,024 properties</b> in Hanoi</h5>
                        <div class="flex-grow-1"/>
                        <span class="d-flex justify-content-end text-nowrap">
                            <button className='btn btn-outline-primary rounded-pill d-flex-center'>
                                <Icon icon="flowbite:sort-outline" inline class="fs-5 me-1" />
                                Top picks
                            </button>
                            <button className='btn btn-outline-primary rounded-pill ms-2 d-flex align-items-center d-lg-none'
                                onClick={() => setFilterShown(true)}
                            >
                                <Icon icon="flowbite:filter-outline" inline class="fs-5 me-1" />
                                Filters
                            </button>
                        </span>
                    </div>
                    <HotelList data={data} />
                </div>
            </div>
        </div>
    );
};

export default HotelPage;