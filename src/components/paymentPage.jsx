import React from "react";
import Page from "./page";
import "./paymentPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCcAmex,
    faCcMastercard,
    faCcVisa,
    faCcDiscover
} from "@fortawesome/free-brands-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

class PaymentPage extends Page {
    state = { paymentMethodIsCash: false };

    getCartTotal() {
        const cartState = this.props.getExposedState("Cart");
        if (cartState.total) return cartState.total;
        else return 0;
    }

    renderPaymentMethod() {
        if (this.state.paymentMethodIsCash) {
        } else {
            return (
                <div className="row px-3 pt-2 pb-3 formPanel">
                    <div className="col">
                        <div id="paymentMethods" className="row">
                            <FontAwesomeIcon
                                className="col ml-5 p-1"
                                icon={faCcVisa}
                            />
                            <FontAwesomeIcon
                                className="col p-1"
                                icon={faCcMastercard}
                            />
                            <FontAwesomeIcon
                                className="col p-1"
                                icon={faCcAmex}
                            />
                            <FontAwesomeIcon
                                className="col mr-5 p-1"
                                icon={faCcDiscover}
                            />
                        </div>

                        <div className="row">
                            <div className="form-group w-100">
                                <label htmlFor="nameOnCard">Name on card</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="nameOnCard"
                                    placeholder="Name on card"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="cardNumber">Card number</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="cardNumber"
                                    placeholder="Card number"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="expiryDate">Expory date</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="expiryDate"
                                    placeholder="Expiry date"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="securityCode">
                                    Security code
                                </label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="securityCode"
                                    placeholder="Security code"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="zipPostalCode">
                                    ZIP/Postal code
                                </label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="zipPostalCode"
                                    placeholder="ZIP/Postal code"
                                />
                            </div>
                            <button
                                id="paymentButton"
                                type="button"
                                className="btn-sm btn-primary col mt-2 pt-1"
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    renderPage() {
        return (
            <div className="col">
                <div className="row">
                    <h4 className="headerCaption">Payment</h4>
                </div>
                <div className="row">
                    <div className="col pl-0">
                        <div id="paymentColumn" className="col mr-2">
                            <div className="row px-3 headerTextColors">
                                Payment information
                            </div>
                            <div
                                id="totalLabel"
                                className="row formPanel py-2 pl-3"
                            >
                                <div className="col pl-0">
                                    Payment amount:&nbsp;
                                    {this.getCartTotal()}{" "}
                                    <FontAwesomeIcon icon={faEuroSign} />
                                </div>
                            </div>
                            <div className="row formPanel">
                                <div className="col">
                                    <label>Pay using</label>
                                    <div className="form-group w-100">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="paymentMethod"
                                                id="creditCard"
                                                checked={
                                                    !this.state
                                                        .paymentMethodIsCash
                                                }
                                                onChange={() => {
                                                    this.setState({
                                                        paymentMethodIsCash: false
                                                    });
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="creditCard"
                                            >
                                                Credit card
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="paymentMethod"
                                                id="cash"
                                                checked={
                                                    this.state
                                                        .paymentMethodIsCash
                                                }
                                                onChange={() => {
                                                    this.setState({
                                                        paymentMethodIsCash: true
                                                    });
                                                }}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="cash"
                                            >
                                                Cash
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {this.renderPaymentMethod()}
                        </div>
                    </div>
                    <div className="col" />
                </div>
            </div>
        );
    }
}

export default PaymentPage;
