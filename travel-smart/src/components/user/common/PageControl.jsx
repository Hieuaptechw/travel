import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import React from 'react';
import './PageControl.scss';

const PageControl = () => {
    return (
        <nav class="-page-control border-top mt-4 py-4">
            <ul class="pagination">
                <li class="page-item"><button class="btn"><Icon icon="mdi:arrow-left" aria-label='Previous' /></button></li>
                <div />
                <li class="page-item active"><button class="btn">1</button></li>
                <li class="page-item"><button class="btn">2</button></li>
                <li class="page-item"><button class="btn">3</button></li>
                <li class="page-item"><button class="btn">4</button></li>
                <div class="d-flex-center"><Icon icon="ic:baseline-more-horiz" /></div>
                <li class="page-item"><button class="btn">103</button></li>
                <div />
                <li class="page-item"><button class="btn"><Icon icon="mdi:arrow-right" aria-label='Next' /></button></li>
            </ul>
            <div class="text-center">
                Showing <b>1 ~ 10</b> out of 1,024 entries
            </div>
        </nav>
    );
};

export default PageControl;