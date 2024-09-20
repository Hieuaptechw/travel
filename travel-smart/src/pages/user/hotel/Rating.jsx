import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const RatingBar = ({ label, score }) => {
    return (
        <div className="mb-3">
            <div className="d-flex justify-content-between">
                <span>{label}</span>
                <strong>{score}</strong>
            </div>
            <ProgressBar
                now={(score / 10) * 100}
                variant="info"
                style={{ height: '8px', backgroundColor: '#e9ecef' }}
            />
        </div>
    );
};
export default RatingBar