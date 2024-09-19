import React from 'react';
import './RangeSlider.scss';

const RangeSlider = ({min, max, step, values, onchange}) => {

    const valueStart = (values[0] - min) / (max - min);
    const valueEnd = (values[1] - min) / (max - min);

    const handleThumbGrab = (e, id) => {
        let newValue = [values[0], values[1]];
        e.target.setPointerCapture(e.pointerId);
        
        let moveEvent = (e) => {
            let thumb = e.target;
            let slider = thumb.parentElement;

            let sliderRect = slider.getBoundingClientRect();
            let percent = (e.clientX - sliderRect.x) / sliderRect.width;
            let value = Math.min(Math.max(percent, 0), 1) * (max - min) + min;
            let realStep = step ?? 1;
            if (realStep > 0) value = Math.round(value / realStep) * realStep;

            newValue[id] = value;
            console.log(newValue);
            onchange([Math.min(...newValue), Math.max(...newValue)]);
        }

        let upEvent = (e) => {
            e.target.removeEventListener("pointermove", moveEvent);
            e.target.removeEventListener("pointerup", upEvent);
        }

        e.target.addEventListener("pointermove", moveEvent);
        e.target.addEventListener("pointerup", upEvent);
    }

    return (
        <div class="-range-slider" role="slider" aria-valuemin={min} aria-valuenow={values} aria-valuemax={max}
            style={{"--value-start": valueStart * 100 + "%", "--value-end": valueEnd * 100 + "%"}}>
            <div class="-range-slider-background"></div>
            <div class="-range-slider-fill"></div>
            <div class="-range-slider-start-thumb" onPointerDown={(e) => handleThumbGrab(e, 0)}></div>
            <div class="-range-slider-end-thumb" onPointerDown={(e) => handleThumbGrab(e, 1)}></div>
        </div>
    );
};

export default RangeSlider;