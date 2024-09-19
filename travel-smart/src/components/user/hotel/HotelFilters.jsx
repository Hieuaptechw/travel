import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React, { useState } from 'react';
import RangeSlider from '../common/RangeSlider';
import CheckEntry from '../common/inputs/CheckEntry';
import RadioEntry from '../common/inputs/RadioEntry';

const configs = {
    deals: {
        "free-cancel": "Free cancellation",
        "pay-later": "Reserve now, pay at stay",
        "special-offer": "Properties with special offers",
    },
    amenities: {
        "wifi": "WiFi",
        "restaurant": "Restaurant",
        "pool": "Swimming pool",
        "billiards": "Billiards pool",
        "ac": "Air conditioning",
    },
    rating: {
        "any": "Any",
        "95-plus": "Exceptional (9.5+)",
        "90-plus": "Wonderful (9.0+)",
        "80-plus": "Great (8.0+)",
        "70-plus": "Good (7.0+)",
    },
}

const HotelFilters = () => {

    let [priceRange, setPriceRange] = useState([0, 510]);

    const handleSetPriceRange = (range) => {
        setPriceRange([Math.min(range[0], 500), range[1]]);
    }

    return (
        <form>
            <div class="form-group">
                <label for="hotel-filter-search"><h5>Search by property name</h5></label>
                <div class="input-group rounded-2 border">
                    <div class="input-group-prepend bg-transparent border-0 d-flex align-items-center">
                        <span class="input-group-text border-0 m-0 pe-0"><Icon icon="mingcute:search-line" class="fs-5" inline /></span>
                    </div>
                    <input id="hotel-filter-search" class="form-control bg-transparent border-0" placeholder='e.g. Best Western'></input>
                </div>
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Deals</h5>
                {Object.entries(configs.deals).map(([id, name]) => <CheckEntry name="deal" key={id} value={id} title={name} />)}
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Night price</h5>
                <RangeSlider min={0} max={510} step={10} values={priceRange} onchange={handleSetPriceRange} />
                <div class="text-center">
                    {
                        priceRange[1] === 0 ? <b>Free!?!!??</b> 
                        : priceRange[0] === 0 && priceRange[1] >= 510 ? <b>Any</b> 
                        : priceRange[0] === 0  ? <>Up to <b>USD {priceRange[1]}</b> / night</> 
                        : priceRange[1] >= 510 ? <>At least <b>USD {priceRange[0]}</b> / night</> 
                        : <>
                            <b>USD {priceRange[0]}</b> / night 
                            ~ {priceRange[1] >= 510 ? <b>Unlimited</b> : <><b>USD {priceRange[1]}</b> / night</>}
                        </>
                    }
                </div>
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Amenities</h5>
                {Object.entries(configs.amenities).map(([id, name]) => <CheckEntry name="amenity" key={id} value={id} title={name} />)}
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Rating</h5>
                {Object.entries(configs.rating).map(([id, name]) => <RadioEntry name="rating" key={id} value={id} title={name} />)}
            </div>
        </form>
    );
};

export default HotelFilters;