import React, { useState } from 'react';
import Course from '../../../components/user/common/Course';
import NumberInput from '../../../components/user/common/NumberInput';

const CheckoutPage = () => {

    const [step, setStep] = useState(0);

    return (
        <div class="container">
            <Course steps={["Review", "Details", "Payment", "Completed"]} current={step} />
            <NumberInput value={step} onChange={setStep} />
            {
                step === 0 && <div className="col col-lg-9 col-xl-6 m-auto">
                    <h1>Review your trip</h1>
                </div>
            }
        </div>
    );
};

export default CheckoutPage;