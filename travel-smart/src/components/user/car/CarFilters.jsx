import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React, { useState } from 'react';
import CheckEntry from '../common/inputs/CheckEntry';
import RadioEntry from '../common/inputs/RadioEntry';
import RangeSlider from '../common/inputs/RangeSlider';

const configs = {
    categories: {
        "small": "Small",
        "medium": "Medium",
        "large": "Large",
        "premium": "Premium",
        "suv": "SUV",
    },
    specifications: {
        "ac": "With air conditioning",
        "no-shake": "No shaking",
        "2-doors": "2 doors",
        "4-doors": "4 doors",
        "sliding-door": "Sliding doors",
    },
    transmission: {
        "automatic": "Automatic",
        "manual": "Manual",
    },
    rating: {
        "any": "Any",
        "95-plus": "Exceptional (9.5+)",
        "90-plus": "Wonderful (9.0+)",
        "80-plus": "Great (8.0+)",
        "70-plus": "Good (7.0+)",
    },
}

const CarFilters = () => {

    let [priceRange, setPriceRange] = useState([0, 3.1]);
    const handleSetPriceRange = (range) => {
        setPriceRange([Math.min(range[0], 3), range[1]]);
    }

    return (
        <form>
            <div class="form-group">
                <h5>Category</h5>
                {Object.entries(configs.categories).map(([id, name]) => <CheckEntry name="category" key={id} value={id} title={name} />)}
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Fare</h5>
                <RangeSlider min={0} max={3.1} step={0.1} values={priceRange} onchange={handleSetPriceRange} />
                <div class="text-center">
                    {
                        priceRange[1] === 0 ? <b>Free!?!!??</b> 
                        : priceRange[0] === 0 && priceRange[1] >= 3.1 ? <b>Any</b> 
                        : priceRange[0] === 0  ? <>Up to <b>USD {priceRange[1].toFixed(1)}</b> / km</> 
                        : priceRange[1] >= 3.1 ? <>At least <b>USD {priceRange[0].toFixed(1)}</b> / km</> 
                        : priceRange[0] === priceRange[1] ? <><b>USD {priceRange[0].toFixed(1)}</b> / km</> 
                        : <>
                            <b>USD {priceRange[0].toFixed(1)}</b> / km 
                            ~ {priceRange[1] >= 3.1 ? <b>Unlimited</b> : <><b>USD {priceRange[1].toFixed(1)}</b> / km</>}
                        </>
                    }
                </div>
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Specification</h5>
                {Object.entries(configs.specifications).map(([id, name]) => <CheckEntry name="specification" key={id} value={id} title={name} />)}
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Coverage</h5>
                <CheckEntry name="coverage" key="unlimited" value="unlimited" title="Unlimited mileage only" />
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Transmission</h5>
                {Object.entries(configs.transmission).map(([id, name]) => <CheckEntry name="transmission" key={id} value={id} title={name} />)}
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Rating</h5>
                {Object.entries(configs.rating).map(([id, name]) => <RadioEntry name="rating" key={id} value={id} title={name} />)}
            </div>
        </form>
    );
};

export default CarFilters;