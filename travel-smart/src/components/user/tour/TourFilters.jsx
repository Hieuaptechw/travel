import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React, { useState } from 'react';
import CheckEntry from '../common/inputs/CheckEntry';
import RadioEntry from '../common/inputs/RadioEntry';
import RangeSlider from '../common/inputs/RangeSlider';

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

    let [adultPriceRange, setAdultPriceRange] = useState([0, 1050]);
    const handleSetAdultPriceRange = (range) => {
        setAdultPriceRange([Math.min(range[0], 1000), range[1]]);
    }
    let [childPriceRange, setChildPriceRange] = useState([0, 1050]);
    const handleSetChildPriceRange = (range) => {
        setChildPriceRange([Math.min(range[0], 1000), range[1]]);
    }
    let [durationRange, setDurationRange] = useState([0, 8]);
    const handleSetDurationRange = (range) => {
        setDurationRange([Math.min(range[0], 7), Math.max(range[1], 1)]);
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
                <RangeSlider min={0} max={1050} step={50} values={adultPriceRange} onchange={handleSetAdultPriceRange} />
                <div class="text-center">
                    {
                        adultPriceRange[1] === 0 ? <><b>Free</b> for adults</>
                        : adultPriceRange[0] === 0 && adultPriceRange[1] >= 1050 ? <><b>Any</b> for adults</>
                        : adultPriceRange[0] === 0  ? <>Up to <b>USD {adultPriceRange[1]}</b> / adult</> 
                        : adultPriceRange[1] >= 1050 ? <>At least <b>USD {adultPriceRange[0]}</b> / adult</> 
                        : adultPriceRange[0] === adultPriceRange[1] ? <><b>USD {adultPriceRange[0]}</b> / adult</> 
                        : <>
                            <b>USD {adultPriceRange[0]}</b> / adult 
                            ~ {adultPriceRange[1] >= 1050 ? <b>Unlimited</b> : <><b>USD {adultPriceRange[1]}</b> / adult</>}
                        </>
                    }
                </div>
                <div class="my-2" />
                <RangeSlider min={0} max={1050} step={50} values={childPriceRange} onchange={handleSetChildPriceRange} />
                <div class="text-center">
                    {
                        childPriceRange[1] === 0 ? <><b>Free</b> for children</>
                        : childPriceRange[0] === 0 && childPriceRange[1] >= 1050 ? <><b>Any</b> for children</>
                        : childPriceRange[0] === 0  ? <>Up to <b>USD {childPriceRange[1]}</b> / child</> 
                        : childPriceRange[1] >= 1050 ? <>At least <b>USD {childPriceRange[0]}</b> / child</> 
                        : childPriceRange[0] === childPriceRange[1] ? <><b>USD {childPriceRange[0]}</b> / child</> 
                        : <>
                            <b>USD {childPriceRange[0]}</b> / child 
                            ~ {childPriceRange[1] >= 1050 ? <b>Unlimited</b> : <><b>USD {childPriceRange[1]}</b> / child</>}
                        </>
                    }
                </div>
            </div>
            <hr class="opacity-100 border-top" />
            <div class="form-group">
                <h5>Duration</h5>
                <RangeSlider min={0} max={8} step={1} values={durationRange} onchange={handleSetDurationRange} />
                <div class="text-center">
                    {
                        durationRange[0] === 0 && durationRange[1] >= 8 ? <b>Any</b>
                        : durationRange[0] === 0  ? <>Up to <b>{durationRange[1]} days</b></> 
                        : durationRange[1] >= 8 ? <>At least <b>{durationRange[0]} days</b></> 
                        : durationRange[0] === durationRange[1] ? <b>{durationRange[0]} days</b>
                        : <><b>{durationRange[0]} days</b> ~ <b>{durationRange[1]} days</b></>
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