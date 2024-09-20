import React from 'react';
import './TripPlanCard.scss';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const TripSummary = ({className, paidNow}) => {
    return (
        <div className={className}>
            <div>
                <h2 class="fs-3">Summary</h2>
                <div class="d-flex">
                    <div class="flex-fill">
                        Passengers
                    </div>
                    <div class="text-end text-nowrap">
                        <b>4 people</b>
                        <small class="d-block opacity-75">(2 adults, 2 children)</small>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="flex-fill">
                        Duration
                    </div>
                    <div class="text-end text-nowrap">
                        <b>9 days, 3.5 hours</b>
                        <small class="d-block opacity-75">
                            (10 Nov - 11:00 PM
                            {" "}<Icon icon="mdi:arrow-right" inline aria-label="to" />{" "}
                            20 Nov - 2:30 AM)
                        </small>
                    </div>
                </div>
            </div>
            <hr class="opacity-75 border-0 mt-2" />
            <div>
                <h2 class="fs-3">Costs</h2>
                <div class="d-flex">
                    <div class="flex-fill">Trip subtotal</div>
                    <div class="text-end text-nowrap fw-bold">USD 1,003.40</div>
                </div>
                <div class="d-flex">
                    <div class="flex-fill">
                        Travel Smart service fee{" "}
                        <small class="opacity-75">(paid{paidNow || " now"})</small>
                    </div>
                    <div className={
                        "text-end text-nowrap fw-bold"
                        + (paidNow ? " -receipt-paid" : "")
                    }>USD 5.00</div>
                </div>
                <hr class="my-1" />
                <div class="d-flex align-items-baseline">
                    <div class="flex-fill">Total</div>
                    <div class="text-end text-nowrap fw-bold">
                        USD{" "}
                        <big class="fs-4">1,008.40</big>
                    </div>
                </div>
                <hr class="my-1" />
                <div class="d-flex align-items-baseline">
                    <div class="flex-fill">
                        {paidNow ? "Paid" : "Due now"}
                    </div>
                    <div className={
                        "text-end text-nowrap fw-bold"
                        + (paidNow ? " -receipt-paid" : "")
                    }>
                        USD{" "}
                        {!paidNow ? <big class="fs-4">581.00</big> : <>581.00</>}
                    </div>
                </div>
                <div class="d-flex align-items-baseline">
                    <div class="flex-fill">
                        {paidNow ? "Remaining" : "Due later"}
                    </div>
                    <div class="text-end text-nowrap fw-bold">
                        USD{" "}
                        {paidNow ? <big class="fs-4">427.40</big> : <>427.40</>}
                    </div>
                </div>
                <small class="d-block mt-2 opacity-75">
                    {paidNow && <>VAT and other taxes included.{" "}
                    This fee does not include extra fees made during the trip.{" "}</>}
                    Car rental fares may vary depending on factors such as wait times during trip.
                </small>
            </div>
        </div>
    );
};

export default TripSummary;