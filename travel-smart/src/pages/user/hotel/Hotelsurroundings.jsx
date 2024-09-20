import React from 'react';
const Hotelsur = ({ title, features, icon }) => {
    return (
        <div>
            <div className='d-flex align-items-center mb-2'>
                <i className={icon}></i>
                <h6 className='ms-2 mb-0'>{title}</h6>
            </div>
            <div className='mb-3'>
                {features.map((feature, index) => (
                    <div className='d-flex align-items-center justify-content-between mb-3 mt-3 border-top text-muted'>
                        <p className='ms-2 mb-0'>{feature.label}</p>
                        <p className='ms-2 mb-0'>{feature.number}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotelsur;
