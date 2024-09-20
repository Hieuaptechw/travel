import React from 'react';
import './TripPlan.scss';
import TripPlanCard from './TripPlanCard';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import TripPlanTimestamp from './TripPlanTimestamp';
import { Spinner } from 'react-bootstrap';

const TripPlan = ({paidNow}) => {
    return (
        <div class="-trip-plan">
            <TripPlanCard color="var(--bs-blue)" icon="carbon:chevron-up-outline">
                <h6 class="m-0 lh-base">Pick up</h6>
                <div>
                    <strong>North Airlines Airport</strong><br/>
                    123 Road Street, Village City, Paris
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Plane takes off" when="10 Nov - 11:00 PM" 
                icon="mdi:plane-takeoff" color="var(--bs-purple)" />

            <TripPlanCard color="var(--bs-purple)" icon="carbon:plane">
                <h6 class="m-0 lh-base">Flight</h6>
                <div>
                    <strong>NAL <Icon icon="mdi:arrow-right" inline aria-label='to' /> CEN</strong><br/>
                    Standard seat
                </div>
                <hr />
                <div class="d-flex">
                    <div class="flex-fill">
                        Ticket price{" "}
                        <small class="opacity-75">(paid{paidNow || " now"})</small>
                    </div>
                    <div className={
                        "text-end text-nowrap fw-bold"
                        + (paidNow ? " -receipt-paid" : "")
                    }>USD 288</div>
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Plane lands" when="11 Nov - 6:30 AM" 
                icon="mdi:plane-landing" color="var(--bs-purple)" />

            <TripPlanCard color="var(--bs-cyan)" icon="carbon:location">
                <h6 class="m-0 lh-base">Location</h6>
                <div>
                    <strong>Central Airport</strong><br/>
                    321 Central Street, London, England
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Car picks up" when="11 Nov - 7:30 AM" 
                icon="mdi:car-outline" color="var(--bs-purple)" />

            <TripPlanCard color="var(--bs-purple)" icon="carbon:car">
                <h6 class="m-0 lh-base">Car rental</h6>
                <div>
                    <strong>Mercedes-Benz E-Class</strong><br/>
                </div>
                <hr />
                <div class="d-flex">
                    <div class="flex-fill">
                        Estimated fare{" "}
                        <small class="opacity-75">(paid at location)</small>
                    </div>
                    <div class="text-end text-nowrap fw-bold">USD 53.20</div>
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Hotel checks in" when="11 Nov - 12:00 PM" 
                icon="material-symbols:key-outline" color="var(--bs-red)" />

            <TripPlanCard color="var(--bs-red)" icon="carbon:hotel">
                <h6 class="m-0 lh-base">Hotel</h6>
                <div>
                    <strong>Feels Like Home Hotel</strong><br/>
                    12 Forest Road, London, England<br/>
                </div>
                <hr />
                <div>
                    8 nights<br/>
                    1 &times; Fireplace Room
                </div>
                {paidNow && <>
                    <hr />
                    <div>
                        <Spinner size="sm" className="me-2" />
                        Finishing reservation procedure...
                    </div>
                </>}
                <hr />
                <div class="d-flex">
                    <div class="flex-fill">
                        Booking price{" "}
                        <small class="opacity-75">(paid at location)</small>
                    </div>
                    <div class="text-end text-nowrap fw-bold">USD 320</div>
                </div>
                <div class="d-flex">
                    <div class="flex-fill">
                        Hotel service fee{" "}
                        <small class="opacity-75">(paid at location)</small>
                    </div>
                    <div class="text-end text-nowrap fw-bold">USD 10</div>
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Hotel checks out" when="19 Nov - 12:00 PM" 
                icon="material-symbols:key-outline" color="var(--bs-red)" />

            <TripPlanTimestamp what="Car picks up" when="19 Nov - 12:10 PM" 
                icon="mdi:car-outline" color="var(--bs-purple)" />

            <TripPlanCard color="var(--bs-purple)" icon="carbon:car">
                <h6 class="m-0 lh-base">Car rental</h6>
                <div>
                    <strong>Mercedes-Benz E-Class</strong><br/>
                </div>
                <hr />
                <div class="d-flex">
                    <div class="flex-fill">
                        Estimated fare{" "}
                        <small class="opacity-75">(paid at location)</small>
                    </div>
                    <div class="text-end text-nowrap fw-bold">USD 53.20</div>
                </div>
            </TripPlanCard>

            <TripPlanCard color="var(--bs-cyan)" icon="carbon:location">
                <h6 class="m-0 lh-base">Location</h6>
                <div>
                    <strong>Central Airport</strong><br/>
                    321 Central Street, London, England
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Plane takes off" when="19 Nov - 6:00 PM" 
                icon="mdi:plane-takeoff" color="var(--bs-purple)" />

            <TripPlanCard color="var(--bs-purple)" icon="carbon:plane">
                <h6 class="m-0 lh-base">Flight</h6>
                <div>
                    <strong>CEN <Icon icon="mdi:arrow-right" inline aria-label='to' /> NAL</strong><br/>
                    Standard seat
                </div>
                <hr />
                <div class="d-flex">
                    <div class="flex-fill">
                        Ticket price{" "}
                        <small class="opacity-75">(paid{paidNow || " now"})</small>
                    </div>
                    <div className={
                        "text-end text-nowrap fw-bold"
                        + (paidNow ? " -receipt-paid" : "")
                    }>USD 288</div>
                </div>
            </TripPlanCard>

            <TripPlanTimestamp what="Plane lands" when="20 Nov - 2:30 AM" 
                icon="mdi:plane-landing" color="var(--bs-purple)" />

            <TripPlanCard color="var(--bs-blue)" icon="carbon:chevron-down-outline">
                <h6 class="m-0 lh-base">Drop off</h6>
                <div>
                    <strong>North Airlines Airport</strong><br/>
                    123 Road Street, Village City, Paris
                </div>
            </TripPlanCard>
        </div>
    );
};

export default TripPlan;