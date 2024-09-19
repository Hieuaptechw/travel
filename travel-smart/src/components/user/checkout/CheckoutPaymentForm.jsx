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
            <div class="mb-0"></div>
        </form>
    )
}

export default CheckoutPaymentForm
