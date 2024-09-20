import React from 'react';
import ReactStars from 'react-stars';
const RatingStar = ({ label, value }) => {
    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between">
                <h5>{label}</h5>
            </div>
            <ReactStars
                count={5}
                color1="#ffd700"
                value={value}
                edit={false}
            />
        </div>
    );
};
export default RatingStar