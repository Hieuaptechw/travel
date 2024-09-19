import React, { useState } from 'react';
import Course from '../../../components/user/common/Course';
import NumberInput from '../../../components/user/common/NumberInput';
import TripPlan from '../../../components/user/plan/TripPlan';

const CheckoutPage = () => {

    const [step, setStep] = useState(0);

    return (
        <div class="container">
            <Course steps={["Review", "Details", "Payment", "Completed"]} current={step} />
            {
                step === 0 && <div className="col col-lg-9 col-xl-7 col-xxl-5 m-auto">
                    <h1>Review your trip</h1>
                    <TripPlan />
                </div>
            }
            <NumberInput value={step} onChange={setStep} />
        </div>
    );
};

export default CheckoutPage;