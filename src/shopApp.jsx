import React from "react";
import App from "./App";

import ProductPage from "./components/jsx/productPage";
import DeliveryPage from "./components/jsx/deliveryPage";
import PaymentPage from "./components/jsx/paymentPage";

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
}

export default ShopApp;
