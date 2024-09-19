import React from 'react'
import { Link } from 'react-router-dom'

function CheckoutPaymentForm() {
    return (
        <form class="row g-3">
            <div class="mt-2"></div>
            <div class="col-12">
                <div class="bg-warning-subtle border border-warning-subtle rounded-2 px-3 py-2">
                    <b>Note:</b> You will be charged your due now amount of <b>USD 581.00</b> plus
                    your payment processor's fees after this step.
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" 
                        name="payment-type" value="paypal" id="payment-type-paypal" />
                    <label for="payment-type-paypal">Pay with PayPal</label>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" 
                        name="payment-type" value="cash-app" id="payment-type-cash-app" />
                    <label for="payment-type-cash-app">Pay with Cash App</label>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" 
                        name="payment-type" value="zalo-pay" id="payment-type-zalo-pay" />
                    <label for="payment-type-zalo-pay">Pay with Zalo Pay</label>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" 
                        name="payment-type" value="crypto" id="payment-type-crypto" />
                    <label for="payment-type-crypto">Pay with some obscure cryptocurrency</label>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" 
                        name="payment-type" value="card" id="payment-type-card" />
                    <label for="payment-type-card">Pay with credit/debit card</label>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center fs-3">
                    <input class="form-check-input mt-0 me-3" type="radio" 
                        name="payment-type" value="cash" id="payment-type-cash" />
                    <label for="payment-type-cash">Pay with cash</label>
                </div>
            </div>
            <div class="mb-0"></div>
        </form>
    )
}

export default CheckoutPaymentForm
