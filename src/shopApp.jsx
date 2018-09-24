import React from "react";
import App from "./App";

import ProductPage from "./components/productPage";
import DeliveryPage from "./components/deliveryPage";
import PaymentPage from "./components/paymentPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faTruck,
    faCreditCard
} from "@fortawesome/free-solid-svg-icons";

class ShopApp extends App {
    constructor() {
        super();

        this.addPage("Cart", faCartPlus, ProductPage, true);
        this.addPage("Delivery", faTruck, DeliveryPage, false);
        this.addPage("Payment", faCreditCard, PaymentPage, false);
    }

    render() {
        return (
            <div id="lgWrapper" className="toggled">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a href="#">LG</a>
                        </li>
                        {this.state.pages.map(page => (
                            <li
                                key={page.id}
                                onClick={() => {
                                    this.selectPage(page.id);
                                }}
                            >
                                <a
                                    href="#"
                                    className={this.getPageIconClasses(page.id)}
                                >
                                    <FontAwesomeIcon icon={page.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        {this.state.pages.map(page =>
                            this.renderPageByDescriptor(page)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopApp;
