import React, { useState } from 'react';
import '../FilterAside.scss';
import TripPlanner from '../../../components/user/common/TripPlanner';
import TourFilters from '../../../components/user/tour/TourFilters';
import TourList from '../../../components/user/tour/TourList';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import PageControl from '../../../components/user/common/PageControl';
import CarFilters from '../../../components/user/car/CarFilters';
import CarList from '../../../components/user/car/CarList';

const data = [...new Array(10)].map(x => (
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dmkVmr4qwATZiDAQK2ObgIb1a8q4lvGinQ&s",
        supplier: "Noi Bai Airport",
        type: "SUV",
        model: "Mercedes-Benz E-Class",
        seats: 4,
        luggage: 2,
        coverage: "Unlimited",
        transmission: "Automatic",
        specifications: ["Air conditioning", "No shaking"],
        waranty: "Free admenments",
        deal: "Free cancellation",
        rating: 9.6,
        ratingCount: 1024,
        pricePerDistance: [0.72, "USD", "km"],
    }
));

const CarPage = () => {

    const [filtersShown, setFilterShown] = useState(false);

    return (
        <div class="container">
            <div class="my-5">
                <h1 class="text-center fs-2 mb-3">Cars for rent</h1>
                <TripPlanner />
            </div>
            <div class="row-lg d-lg-flex">
                <div class={
                    "-filter-aside col col-lg-3 flex-shrink-1 me-lg-4 mb-lg-4"
                    + (filtersShown ? " show" : "")
                }>
                    <button className='btn d-flex align-items-center d-lg-none p-2 mb-4'
                        onClick={() => setFilterShown(false)}
                    >
                        <Icon icon="flowbite:close-outline" class="fs-3" />
                    </button>
                    <CarFilters />
                </div>
                <div class="col col-lg-9 flex-shrink-1">
                    <div class="d-md-flex align-items-center flex-wrap">
                        <h5 className="my-3"><b>1,024 cars</b> in Hanoi</h5>
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
                    <CarList data={data} />
                    <PageControl />
                </div>
            </div>
        </div>
    );
};

export default CarPage;