import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';
import './NumberInput.scss';

const NumberInput = ({value, onChange}) => {
    return (
        <div class='-number-input d-inline-flex align-items-center'>
            <button class="btn btn-outline-primary icon-button" onClick={() => onChange(value - 1)}>
                <Icon icon="mdi:minus" />
            </button>
            <span class="fs-6 mx-3">{value}</span>
            <button class="btn btn-outline-primary icon-button" onClick={() => onChange(value + 1)}>
                <Icon icon="mdi:add" />
            </button>
        </div>
    );
};

export default NumberInput;