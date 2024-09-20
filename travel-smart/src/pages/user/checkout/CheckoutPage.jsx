import React, { useRef, useState } from 'react';
import Course from '../../../components/user/common/Course';
import NumberInput from '../../../components/user/common/NumberInput';
import TripPlan from '../../../components/user/plan/TripPlan';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import TripSummary from '../../../components/user/plan/TripSummary';
import CheckoutUserForm from '../../../components/user/checkout/CheckoutUserForm';
import CheckoutPaymentForm from '../../../components/user/checkout/CheckoutPaymentForm';
import { CSSTransition } from "react-transition-group";
import "./CheckoutPage.scss";

import vietqrcode from "../../../assets/images/vietqrcode.svg"

const CheckoutPage = () => {

    const [step, setStep] = useState(0);
    const [stepVisible, setStepVisible] = useState(0);
    const [fade, setFade] = useState(true);
    const fadeRef = useRef();
    
    const [subStep, setSubStep] = useState("");
    const [subFade, setSubFade] = useState(true);
    const subFadeRef = useRef();
    
    const [asideFade, setAsideFade] = useState(true);
    const [asideShown, setAsideShown] = useState(true);
    const asideFadeRef = useRef();

    const [paymentMethod, setPaymentMethod] = useState();
    
    const [status, setStatus] = useState("");

    // TODO: process payments
    const [fakeTimeout, setFakeTimeout] = useState(0);


    const handleChangeStep = (amount) => {
        setStepVisible(step + amount);
        setFade(false);
        setTimeout(() => {
            setFade(true);
            setStep(step + amount);
            window.scrollTo(0, 0);
        }, 500);
        setTimeout(() => window.scrollTo(0, 0), 16);
    }
    const handleChangeSubStep = (target) => {
        setSubFade(false);
        setTimeout(() => {
            setSubFade(true);
            setSubStep(target);
            window.scrollTo(0, 0);
        }, 500);
        setTimeout(() => window.scrollTo(0, 0), 16);
    }
    const handleChangeAsideShown = (target) => {
        target && setAsideShown(true);
        setTimeout(() => {
            setAsideFade(target);
        }, 0);
        setTimeout(() => {
            target || setAsideShown(false);
        }, 500);
    }
    const handleBack = () => {
        if (fade) {
            if (step === 2) {
                if (subStep) {
                    handleChangeSubStep("");
                    clearTimeout(fakeTimeout);
                    setTimeout(() => handleChangeAsideShown(true), 500);
                } else {
                    handleChangeStep(-1);
                    setTimeout(() => handleChangeAsideShown(true), 500);
                }
            } else {
                handleChangeStep(-1);
            }
        }
    }
    const handleContinue = () => {
        if (fade) {
            if (step === 2) {
                console.log(subStep, paymentMethod);
                handleChangeSubStep(paymentMethod);
                handleChangeAsideShown(false);
                if (!["vietqr", "crypto", "cash"].includes(paymentMethod)) {
                    setStatus("pending");
                    setFakeTimeout(setTimeout(() => {
                        setStatus("completed");
                        setFakeTimeout(setTimeout(() => {
                            handleChangeStep(1);
                            setFakeTimeout(setTimeout(() => {
                                setSubStep("");
                            }, 500));
                        }, 1500));
                    }, 5000));
                }
            } else {
                handleChangeStep(1);
            }
        }
    }

    return (
        <div class="container">
            <div class="sticky-top py-3">
                <div class="bg-body rounded-4 p-2 p-lg-3">
                    <Course steps={["Review", "Details", "Payment", "Booking", "Receipt"]} current={stepVisible} />
                </div>
            </div>
            <div class="d-flex-center align-items-lg-stretch flex-column flex-lg-row">
                <CSSTransition nodeRef={fadeRef} classNames="-checkout-fade" in={fade} timeout={500}><>
                    {
                        step === 0 && <div ref={fadeRef} className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                            <h1>Review your trip</h1>
                            <p>Double check your trip plans and pricing</p>
                            <h2>Plan</h2>
                            <TripPlan />
                        </div>
                    }{
                        step === 1 && <div ref={fadeRef} className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                            <h1>
                                <button class="btn align-baseline p-0 me-2" onClick={handleBack}>
                                    <Icon icon="ic:outline-keyboard-arrow-left" class="fs-1" inline/>
                                </button>
                                Let us know more about you
                            </h1>
                            <CheckoutUserForm />
                        </div>
                    }{
                        step === 2 && <div ref={fadeRef} className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                            <CSSTransition nodeRef={subFadeRef} classNames="-checkout-fade" in={subFade} timeout={500}>
                                <div ref={subFadeRef}>
                                    {
                                        !subStep ? <>
                                        <h1>
                                            <button class="btn align-baseline p-0 me-2" onClick={handleBack}>
                                                <Icon icon="ic:outline-keyboard-arrow-left" class="fs-1" inline/>
                                            </button>
                                            How would you like to pay?
                                        </h1>
                                        <CheckoutPaymentForm method={paymentMethod} setMethod={setPaymentMethod} />
                                        </> : ({
                                            vietqr: (<>
                                                <h1>
                                                    <button class="btn align-baseline p-0 me-2" onClick={handleBack}>
                                                        <Icon icon="ic:outline-keyboard-arrow-left" class="fs-1" inline/>
                                                    </button>
                                                    Pay with VietQR
                                                </h1>
                                                <p>
                                                    Scan the following QR code with a VietQR-supported app and follow in-app instructions to
                                                    send <b>VND 14,263,550</b> (VietQR only allows transactions in Vietnamese Dong)
                                                </p>
                                                <div class="m-4 p-4 rounded-4 bg-primary">
                                                    <img src={vietqrcode} class="h-100 rounded-3" alt="VietQR code" />
                                                </div>
                                                <p>
                                                    After we receive your money and verify the transaction, this page will automatically redirect you to the next step.
                                                </p>
                                                <button class="btn btn-outline-primary" onClick={handleBack}>
                                                    Cancel
                                                </button>
                                            </>),
                                            crypto: (<>
                                                <h1>
                                                    <button class="btn align-baseline p-0 me-2" onClick={handleBack}>
                                                        <Icon icon="ic:outline-keyboard-arrow-left" class="fs-1" inline/>
                                                    </button>
                                                    Pay with crypto
                                                </h1>
                                                <div class="text-center">
                                                    <div class="-checkout-big-icon">
                                                        <Icon icon="hugeicons:bitcoin-cpu" />
                                                    </div>
                                                </div>
                                                <p>
                                                    We allow payments in <dfn>OCC</dfn> (Obsure Crypto Currency) 
                                                </p>
                                                <blockquote class="ms-5">
                                                    Amount: <b>OCC 1,420,691,337</b><br/>
                                                    Wallet: <b>1b546d34366b618cd30adddecc2982c750aa29a82d200dfb</b><br />
                                                    Message: <b>TRAVEL SMART TRANSACTION 11AABD45-0127-4CE2-ACF3-1C17E03BD27C</b>
                                                </blockquote>
                                                <p>
                                                    After we receive your money and verify the transaction, this page will automatically redirect you to the next step.
                                                </p>
                                                <button class="btn btn-outline-primary" onClick={handleBack}>
                                                    Cancel
                                                </button>
                                            </>),
                                            cash: (<>
                                                <h1>
                                                    <button class="btn align-baseline p-0 me-2" onClick={handleBack}>
                                                        <Icon icon="ic:outline-keyboard-arrow-left" class="fs-1" inline/>
                                                    </button>
                                                    Pay with cash
                                                </h1>
                                                <div class="text-center">
                                                    <div class="-checkout-big-icon">
                                                        <Icon icon="hugeicons:money-04" />
                                                    </div>
                                                </div>
                                                <p>
                                                    Send a mail along with <b>USD 581.00</b> to the following address:
                                                </p>
                                                <blockquote class="ms-5 fw-bold">
                                                    Travel Smart Australia Office<br/>
                                                    285 Apple Avenue, Sydney, Australia
                                                </blockquote>
                                                <p>
                                                    The contents of the mail must contain the following:
                                                </p>
                                                <blockquote class="ms-5 fw-bold">
                                                    TRAVEL SMART TRANSACTION 11AABD45-0127-4CE2-ACF3-1C17E03BD27C
                                                </blockquote>
                                                <p>
                                                    After we receive your money and verify the transaction, this page will automatically redirect you to the next step.
                                                </p>
                                                <button class="btn btn-outline-primary" onClick={handleBack}>
                                                    Cancel
                                                </button>
                                            </>),
                                        }[subStep] ?? <div class="text-center">
                                            {
                                                status === "pending" && <>
                                                    <div class="-checkout-big-icon">
                                                        <Icon icon="line-md:loading-twotone-loop" />
                                                    </div>
                                                    <h1>Processing payment...</h1>
                                                    <p>Your payment is being processed.</p>
                                                </>
                                            }{
                                                status === "completed" && <>
                                                    <div class="-checkout-big-icon bg-success">
                                                        <Icon icon="line-md:confirm" />
                                                    </div>
                                                    <h1>Payment completed!</h1>
                                                    <p>Redirecting to next step...</p>
                                                </>
                                            }
                                        </div>)
                                    }
                                    
                                </div>
                            </CSSTransition>
                        </div>
                    }{
                        step === 3 && <div ref={fadeRef} className='col-12 col-md-9 col-lg-12 col-xl-10 col-xxl-9'>
                            <hgroup class="d-lg-flex align-items-center mt-3 mb-4">
                                <div class="-trip-status-circle">
                                    <Icon icon="material-symbols-light:room-service-outline" />
                                </div>
                                <div>
                                    <h1 class="lh-1">
                                        Your trip is being prepared.
                                    </h1>
                                    <p class="m-0">
                                        We are finishing the reservation procedure at Feels Like Home Hotel.
                                    </p>
                                </div>
                            </hgroup>
                            <div class="row">
                                <div className="col-12 col-lg-7">
                                    <h2>Plan</h2>
                                    <TripPlan paidNow />
                                </div>
                                <div className="col-12 col-lg-5 ms-0">
                                    <TripSummary paidNow />
                                </div>
                            </div>
                        </div>
                    }
                </></CSSTransition>
                {asideShown && <CSSTransition nodeRef={asideFadeRef} classNames="-checkout-fade" in={asideFade} timeout={500}>
                    <div ref={asideFadeRef} className="col-12 col-md-9 col-lg-4 ms-0 ms-lg-5 py-2 d-flex flex-column">
                        <TripSummary className={
                            "flex-fill mb-4"
                            + (step >= 1 ? " d-none d-lg-block" : "")
                        } />
                        <button class="btn btn-primary d-flex-center mb-2 py-4" onClick={handleContinue}>
                            Continue
                            <Icon icon="radix-icons:arrow-top-right" inline class="fs-4 ms-1" />
                        </button>
                    </div>
                </CSSTransition>}
            </div>
        </div>
    );
};

export default CheckoutPage;