import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';

const configs = {
    deals: {
        "free-cancel": "Free cancellation",
        "pay-later": "Reserve now, pay at stay",
        "special-offer": "Properties with special offers",
    }
}

const CheckEntry = ({id, name}) => (
    <div class="form-check">
        <input id={id} class="form-check-input border-primary" type="checkbox" />
        <label for={id} class="form-check-label" >
            {name}
        </label>
    </div>
)

const HotelFilters = () => {
    return (
        <div>
            <div class="form-group">
                <label for="hotel-filter-search"><h5>Search by property name</h5></label>
                <div class="input-group rounded-2 border">
                    <div class="input-group-prepend bg-transparent border-0 d-flex align-items-center">
                        <span class="input-group-text border-0 m-0"><Icon icon="mingcute:search-line" class="fs-5" inline /></span>
                    </div>
                    <input id="hotel-filter-search" class="form-control bg-transparent border-0"></input>
                </div>
            </div>
            <hr class="opacity-100 border-top" />
            <h5>Deals</h5>
            {Object.entries(configs.deals).map(([id, name]) => <CheckEntry id={"hotel-deal-" + id} name={name} />)}
        </div>
    );
};

export default HotelFilters;