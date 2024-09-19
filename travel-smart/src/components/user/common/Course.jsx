import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';
import './Course.scss';

const Course = ({steps, current}) => {
    return (
        <div class="course">
            {steps.map((x, i) => <>
                <div class={
                    "course-step"
                    + (current > i ? " done" : current === i ? " in-progress" : "")
                }>
                    <span class="course-circle">
                        <Icon className="course-check" icon="ion:checkmark" />
                        <span class="course-number">{i + 1}</span>
                    </span>
                    <span class="course-label">{x}</span>
                </div>
                {i < steps.length - 1 && <div class="course-line" />}
            </>)}
        </div>
    );
};

export default Course;