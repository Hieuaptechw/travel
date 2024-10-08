import React from 'react'
import { Link } from 'react-router-dom'

function CheckoutUserForm() {
    return (
        <form class="row g-3">
            <div class="mt-2"></div>
            <div class="col-12">
                <div class="bg-primary-subtle border border-primary-subtle rounded-2 px-3 py-2">
                <b>Tip:</b> <Link to="/register">Register for a Travel Smart account</Link> to save your details for later trips!<br/>
                Already have an account? <Link to="/login">Log in to an existing account</Link>
                </div>
            </div>
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="user-name" />
                            <label for="user-name">Full name</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="user-email" />
                            <label for="user-email">Email address</label>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="phone" class="form-control" id="user-phone" />
                            <label for="user-phone">Phone number</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input type="email" class="form-control" id="user-address-1" />
                    <label for="user-address-1">Address line 1</label>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <input type="email" class="form-control" id="user-address-2" />
                    <label for="user-address-2">Address line 2</label>
                </div>
            </div>
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="user-city" />
                            <label for="user-city">City</label>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="user-state" />
                            <label for="user-state">State / Province / Region</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="user-country" />
                            <label for="user-country">Country</label>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="user-zip-code" />
                            <label for="user-zip-code">Zip / Postal code</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex align-items-center">
                    <input class="form-check-input fs-3 mt-0 me-3" type="checkbox" value="" id="user-legal" />
                    <label for="user-legal">
                        I have read and agree to Travel Smart's <Link to="/terms">Terms of Service</Link>{" "}
                        and <Link to="/privacy">Privacy Policy</Link>
                    </label>
                </div>
                <div class="d-flex align-items-center mt-3">
                    <input class="form-check-input fs-3 mt-0 me-3" type="checkbox" value="" id="user-newsletter" />
                    <label  for="user-newsletter">
                        Sign me up for Travel Smart's newsletter and send me latest deals
                        to my provided email address (optional)
                    </label>
                </div>
            </div>
            <div class="mb-0"></div>
        </form>
    )
}

export default CheckoutUserForm
