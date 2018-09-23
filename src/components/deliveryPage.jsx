import React from "react";
import Page from "./page";
import "./deliveryPage.css";

class DeliveryPage extends Page {
    state = { invoice: true };

    renderInvoiceDetails() {
        if (!this.state.invoice) return null;

        return (
            <React.Fragment>
                <div className="form-group w-100">
                    <label htmlFor="companyName">Company name</label>
                    <input
                        type="text"
                        autoComplete="off"
                        className="form-control form-control-sm"
                        id="companyName"
                        placeholder="Company name"
                    />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="eik">EIK</label>
                    <input
                        type="text"
                        autoComplete="off"
                        className="form-control form-control-sm"
                        id="eik"
                        placeholder="EIK"
                    />
                </div>
                <label>VAT registration</label>
                <div className="form-group w-100">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="vat"
                            id="vatYes"
                        />
                        <label className="form-check-label" htmlFor="vatYes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="vat"
                            id="vatNo"
                            checked
                            onChange={() => {}}
                        />
                        <label className="form-check-label" htmlFor="vatNo">
                            No
                        </label>
                    </div>
                </div>
                <div className="form-group w-100">
                    <label htmlFor="responsibleOfficial">
                        Responsible official
                    </label>
                    <input
                        type="tel"
                        autoComplete="off"
                        className="form-control form-control-sm"
                        id="responsibleOfficial"
                        placeholder="Responsible official"
                    />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="invoiceAddress">Address</label>
                    <input
                        type="tel"
                        autoComplete="off"
                        className="form-control form-control-sm"
                        id="invoiceAddress"
                        placeholder="Address"
                    />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="invoiceCity">City</label>
                    <input
                        type="tel"
                        autoComplete="off"
                        className="form-control form-control-sm"
                        id="invoiceCity"
                        placeholder="City"
                    />
                </div>
                <div className="form-group w-100">
                    <label htmlFor="invoicePostalCode">Postal code</label>
                    <input
                        type="tel"
                        autoComplete="off"
                        className="form-control form-control-sm"
                        id="invoicePostalCode"
                        placeholder="Postal code"
                    />
                </div>
            </React.Fragment>
        );
    }

    renderPage() {
        return (
            <div className="col">
                <div className="row">
                    <h4 className="headerCaption">Delivery Page</h4>
                </div>
                <div className="row">
                    <div className="col mr-2">
                        <div className="row px-3 headerTextColors">
                            Delivery address
                        </div>
                        <div className="row px-3 formPanel">
                            <div className="form-group w-100">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="fullName"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="address"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="city"
                                    placeholder="City"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="postalCode">Postal code</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="postalCode"
                                    placeholder="Postal code"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="country">Country</label>
                                <select
                                    className="form-control form-control-sm"
                                    id="country"
                                    placeholder="Country"
                                >
                                    <option>Bulgaria</option>
                                </select>
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="phoneNumber">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="phoneNumber"
                                    placeholder="Phone number"
                                />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="emailAddress">
                                    Email address
                                </label>
                                <input
                                    type="tel"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="emailAddress"
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col mx-2">
                        <div className="row px-3 headerTextColors">
                            Delivery
                        </div>
                        <div className="row px-3 py-1 formPanel">
                            <label>Delivery</label>
                            <div className="form-group w-100">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="courier"
                                        id="deliveryByCourier"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="deliveryByCourier"
                                    >
                                        By our courier
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="courier"
                                        id="deliveryCourier1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="deliveryCourier1"
                                    >
                                        Fast Delivery International
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="courier"
                                        id="deliveryCourier2"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="deliveryCourier2"
                                    >
                                        Village Deliveries
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="courier"
                                        id="deliveryCourier3"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="deliveryCourier3"
                                    >
                                        Speed Drivers
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3 px-3 headerTextColors">
                            Details
                        </div>
                        <div className="row px-3 py-1 formPanel">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                id="comment"
                                className="my-2 h-75 w-100"
                            />
                        </div>
                    </div>
                    <div className="col ml-2">
                        <div className="row px-3 headerTextColors">
                            Invoice data
                        </div>
                        <div className="row px-3 py-1 formPanel">
                            <label>Would you like an invoice?</label>
                            <div className="form-group w-100">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="invoice"
                                        id="invoiceYes"
                                        checked={this.state.invoice}
                                        onChange={e => {
                                            this.setState({ invoice: true });
                                        }}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="invoiceYes"
                                    >
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="invoice"
                                        id="invoiceNo"
                                        checked={!this.state.invoice}
                                        onChange={e => {
                                            this.setState({ invoice: false });
                                        }}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="invoiceNo"
                                    >
                                        No
                                    </label>
                                </div>
                            </div>
                            {this.renderInvoiceDetails()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeliveryPage;
