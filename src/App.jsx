import React, { Component } from "react";
import "./App.css";
import ProductPage from "./components/productPage";
import DeliveryPage from "./components/deliveryPage";
import PaymentPage from "./components/paymentPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faTruck,
    faCreditCard
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
    state = { pages: [] };

    pageId = 1;

    constructor() {
        super();

        this.state.pages.push(
            this.createPageDescriptor(faCartPlus, ProductPage, true)
        );
        this.state.pages.push(
            this.createPageDescriptor(faTruck, DeliveryPage, false)
        );
        this.state.pages.push(
            this.createPageDescriptor(faCreditCard, PaymentPage, false)
        );
    }

    createPageDescriptor(icon, type, selected) {
        return {
            id: this.pageId++,
            icon: icon,
            type: type,
            selected: selected
        };
    }

    renderPageByDescriptor(page) {
        const TagName = page.type;
        return <TagName key={page.id} hidden={!page.selected} />;
    }

    selectPage(pageId) {
        let modified = this.state.pages.map(a => Object.assign({}, a));
        for (let i = 0; i < modified.length; i++) {
            if (modified[i].id === pageId) modified[i].selected = true;
            else modified[i].selected = false;
        }
        this.setState({ pages: modified });
    }

    getPageIconClasses(pageId) {
        for (let i = 0; i < this.state.pages.length; i++)
            if (this.state.pages[i].id === pageId)
                if (this.state.pages[i].selected) return "lgSelected";
        return " ";
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

export default App;
