import React, { useState } from 'react';
import Course from '../../../components/user/common/Course';
import NumberInput from '../../../components/user/common/NumberInput';
import TripPlan from '../../../components/user/plan/TripPlan';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import TripSummary from '../../../components/user/plan/TripSummary';

const CheckoutPage = () => {

    const [step, setStep] = useState(0);

    const handleBack = () => {
        setStep(step - 1);
        setTimeout(() => window.scrollTo(0, 0), 16);
    }
    const handleContinue = () => {
        setStep(step + 1);
        setTimeout(() => window.scrollTo(0, 0), 16);
    }

    return (
        <div class="container">
            <div class="sticky-top py-3">
                <div class="bg-body rounded-4 p-2 p-lg-3">
                    <Course steps={["Review", "Details", "Payment", "Completed"]} current={step} />
                </div>
            </div>
            <div class="d-flex-center align-items-lg-stretch flex-column flex-lg-row">
                {
                    step === 0 && <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <h1>Review your trip</h1>
                        <TripPlan />
                    </div>
                }{
                    step === 1 && <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <h1>
                            <button class="btn align-baseline p-0 me-2" onClick={handleBack}>
                                <Icon icon="ic:outline-keyboard-arrow-left" class="fs-1" inline/>
                            </button>
                            Let us know more about you
                        </h1>
                    </div>
                }
                <div className="col-12 col-md-9 col-lg-4 ms-0 ms-lg-5 py-2 d-flex flex-column">
                    <TripSummary className={
                        "flex-fill mb-4"
                        + (step >= 1 ? " d-none d-lg-block" : "")
                    } />
                    <button class="btn btn-primary d-flex-center mb-2 py-4" onClick={handleContinue}>
                        Continue
                        <Icon icon="radix-icons:arrow-top-right" inline class="fs-4 ms-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;