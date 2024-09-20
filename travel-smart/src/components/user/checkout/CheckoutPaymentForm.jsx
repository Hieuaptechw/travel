import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import './CheckoutPaymentForm.scss';
import { Icon } from '@iconify-icon/react';

function CheckoutPaymentForm({method, setMethod}) {

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
    }

    return (
        <form class="-checkout-payment row g-3">
            <div class="mt-2"></div>
            <div class="col-12">
                <div class="bg-warning-subtle border border-warning-subtle rounded-2 px-3 py-2">
                    <b>Note:</b> You will be charged your due now amount of <b>USD 581.00</b> plus
                    your payment processor's fees after this step.
                </div>
            </div>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "paypal"}
                        onChange={handleMethodChange} name="payment-type" value="paypal" id="payment-type-paypal" />
                    <label for="payment-type-paypal">Pay with PayPal</label>
                </div>
            </div>
            <Collapse in={method === "paypal"}>
                <div>
                    <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2 mt-2">
                        You will be redirected to PayPal to complete the transaction.
                        Click <b>Continue</b> to enter the next step.
                    </div>
                </div>
            </Collapse>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "cash-app"}
                        onChange={handleMethodChange} name="payment-type" value="cash-app" id="payment-type-cash-app" />
                    <label for="payment-type-cash-app">Pay with Cash App</label>
                </div>
            </div>
            <Collapse in={method === "cash-app"}>
                <div>
                    <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2 mt-2">
                        You will be redirected to Cash App to complete the transaction.
                        Click <b>Continue</b> to enter the next step.
                    </div>
                </div>
            </Collapse>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "zalo-pay"}
                        onChange={handleMethodChange} name="payment-type" value="zalo-pay" id="payment-type-zalo-pay" />
                    <label for="payment-type-zalo-pay">Pay with Zalo Pay</label>
                </div>
            </div>
            <Collapse in={method === "zalo-pay"}>
                <div>
                    <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2 mt-2">
                        You will be redirected to Zalo Pay to complete the transaction.
                        Click <b>Continue</b> to enter the next step.
                    </div>
                </div>
            </Collapse>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "card"}
                        onChange={handleMethodChange} name="payment-type" value="card" id="payment-type-card" />
                    <label for="payment-type-card">Pay with credit/debit card</label>
                </div>
            </div>
            <Collapse in={method === "card"}>
                <div>
                    <div class="row g-2 mt-0">
                        <div class="col-12">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="card-number" />
                                <label for="card-number">Card number</label>
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="form-floating">
                                <input type="month" class="form-control" id="card-expiration" />
                                <label for="card-expiration">Expiration date</label>
                            </div>
                        </div>
                        <div class="col-5 col-md-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="card-cvc" />
                                <label for="card-cvc">Verification code</label>
                            </div>
                        </div>
                        <small class="col-12 d-flex flex-wrap justify-content-end align-items-center">
                            <span class="opacity-50 my-1">Payments are processed securely</span>
                            <span class="d-flex">
                                <span class="-payment-card-support-button ms-1">
                                    <Icon icon="logos:visa" height={12} />
                                </span>
                                <span class="-payment-card-support-button ms-1">
                                    <Icon icon="logos:mastercard" height={18} />
                                </span>
                                <span class="-payment-card-support-button ms-1">
                                    <Icon icon="logos:discover" height={8} />
                                </span>
                                <span class="-payment-card-support-button ms-1">
                                    <Icon icon="logos:jcb" height={18} />
                                </span>
                                </span>
                        </small>
                    </div>
                </div>
            </Collapse>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "vietqr"}
                        onChange={handleMethodChange} name="payment-type" value="vietqr" id="payment-type-vietqr" />
                    <label for="payment-type-vietqr">Pay with VietQR</label>
                </div>
            </div>
            <Collapse in={method === "vietqr"}>
                <div>
                    <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2 mt-2">
                        Click <b>Continue</b> to enter the next step.
                    </div>
                </div>
            </Collapse>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "crypto"}
                        onChange={handleMethodChange} name="payment-type" value="crypto" id="payment-type-crypto" />
                    <label for="payment-type-crypto">Pay with some obscure cryptocurrency</label>
                </div>
            </div>
            <Collapse in={method === "crypto"}>
                <div>
                    <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2 mt-2">
                        Click <b>Continue</b> to enter the next step.
                    </div>
                </div>
            </Collapse>

            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" checked={method === "cash"}
                        onChange={handleMethodChange} name="payment-type" value="cash" id="payment-type-cash" />
                    <label for="payment-type-cash">Pay with cash</label>
                </div>
            </div>
            <Collapse in={method === "cash"}>
                <div>
                    <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2 mt-2">
                        Click <b>Continue</b> to enter the next step.
                    </div>
                </div>
            </Collapse>

            <div class="mb-0"></div>
        </form>
    )
}

export default CheckoutPaymentForm
