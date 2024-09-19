import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React, { useState } from 'react';
import CheckEntry from '../common/inputs/CheckEntry';
import RadioEntry from '../common/inputs/RadioEntry';
import RangeSlider from '../common/RangeSlider';

const configs = {
    categories: {
        "tour": "Tour",
        "attractions": "Attractions",
        "team-building": "Team building",
        "concert": "Concert",
    },
    rating: {
        "any": "Any",
        "95-plus": "Exceptional (9.5+)",
        "90-plus": "Wonderful (9.0+)",
        "80-plus": "Great (8.0+)",
        "70-plus": "Good (7.0+)",
    },
}

const TourFilters = () => {

    let [priceRange, setPriceRange] = useState([0, 1050]);

    const handleSetPriceRange = (range) => {
        setPriceRange([Math.min(range[0], 1000), range[1]]);
    }

    return (
        <form>
            <div class="form-group">
                <h5>Category</h5>
                {Object.entries(configs.categories).map(([id, name]) => <CheckEntry name="category" key={id} value={id} title={name} />)}
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Price</h5>
                <RangeSlider min={0} max={1050} step={50} values={priceRange} onchange={handleSetPriceRange} />
                <div class="text-center">
                    {
                        priceRange[1] === 0 ? <b>Free!?!!??</b> 
                        : priceRange[0] === 0 && priceRange[1] >= 1050 ? <b>Any</b> 
                        : priceRange[0] === 0  ? <>Up to <b>USD {priceRange[1]}</b> / adult</> 
                        : priceRange[1] >= 1050 ? <>At least <b>USD {priceRange[0]}</b> / adult</> 
                        : <>
                            <b>USD {priceRange[0]}</b> / adult 
                            ~ {priceRange[1] >= 1050 ? <b>Unlimited</b> : <><b>USD {priceRange[1]}</b> / adult</>}
                        </>
                    }
                </div>
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Rating</h5>
                {Object.entries(configs.rating).map(([id, name]) => <RadioEntry name="rating" key={id} value={id} title={name} />)}
            </div>
        </form>
    );
};

export default TourFilters;