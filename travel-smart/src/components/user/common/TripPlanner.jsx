import React from 'react';
import { Icon } from '@iconify-icon/react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './TripPlanner.scss';
import NumberInput from './NumberInput';
import DatePicker from './DatePicker';

const TripPlanner = () => {

    const whenPicker = (
        <Popover className="-trip-planner-popover border-0 bg-transparent" style={{transform: "scale(0.8)"}}>
            <div class="-trip-planner-when-picker bg-body rounded-2 shadow p-3 fs-6">
                <DatePicker value={"2024-1-1"} />
            </div>
        </Popover>
    )

    const whoPicker = (
        <Popover className="-trip-planner-popover border-0 bg-transparent">
            <div class="-trip-planner-who-picker bg-body rounded-2 shadow p-3 fs-6">
                <div class="d-flex m-2 align-items-center">
                    <span class="flex-fill">
                        <h6 class="m-0">Adults</h6>
                    </span>
                    <NumberInput value={0} onChange={() => {}} />
                </div>
                <hr class="mx-3 my-3" />
                <div class="d-flex m-2 align-items-center">
                    <span class="flex-fill">
                        <h6 class="m-0">Children</h6>
                        <p class="m-0">Ages 0-17</p>
                    </span>
                    <NumberInput value={0} onChange={() => {}} />
                </div>
                <hr class="mx-3 my-3" />
                <div class="d-flex m-2 align-items-center">
                    <span class="flex-fill">
                        <h6 class="m-0">Rooms</h6>
                    </span>
                    <NumberInput value={0} onChange={() => {}} />
                </div>
            </div>
        </Popover>
    )

    return (
        <div class="-trip-planner d-flex flex-column flex-lg-row bg-body text-dark shadow p-2 ps-lg-3 pt-3 pt-lg-2 rounded-3">
            <div class="flex-fill">
                <label for="trip-planner-location" class="d-block"><h6 class="m-0">Where</h6></label>
                <input id="trip-planner-location" class="border-0 p-0 d-block w-100 outline-none" placeholder="Where are you going?" />
            </div>
            <hr />
            <OverlayTrigger placement="bottom" offset={[0, 20]} trigger="click" rootClose overlay={whenPicker}>
                <div class="flex-fill" role="button">
                    <h6 class="m-0">When</h6>
                    <p class="m-0">23 Sep <Icon icon="mdi:arrow-right" inline aria-label='to' /> 26 Sep</p>
                </div>
            </OverlayTrigger>
            <hr />
            <OverlayTrigger placement="bottom" offset={[0, 20]} trigger="click" rootClose overlay={whoPicker}>
                <div class="flex-fill" role="button">
                    <h6 class="m-0">Who</h6>
                    <p class="m-0">2 adults, 2 children, 1 room</p>
                </div>
            </OverlayTrigger>
            <button class="btn btn-primary d-flex align-items-center justify-content-center">
                <Icon icon="mdi:search" class="fs-5 me-1" />
                Search
            </button>
        </div>
    );
};

export default TripPlanner;