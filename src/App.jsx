import React, { Component } from "react";
import "./App.css";
import ProductPage from "./components/productPage";
import DeliveryPage from "./components/deliveryPage";
import PaymentPage from "./components/paymentPage";

class App extends Component {
    state = { pages: [] };

    constructor() {
        super();

        this.state.pages.push(
            this.createPageDescriptor("Cart", ProductPage, false)
        );
        this.state.pages.push(
            this.createPageDescriptor("Delivery", DeliveryPage, true)
        );
        this.state.pages.push(
            this.createPageDescriptor("Payment", PaymentPage, true)
        );
    }

    createPageDescriptor(name, type, hidden) {
        return {
            name: name,
            type: type,
            hidden: hidden
        };
    }

    renderPageByDescriptor(page) {
        const TagName = page.type;
        return <TagName key={page.name} hidden={page.hidden} />;
    }

    selectPage(pageName) {
        let modified = this.state.pages.map(a => Object.assign({}, a));
        for (let i = 0; i < modified.length; i++) {
            if (modified[i].name === pageName) modified[i].hidden = false;
            else modified[i].hidden = true;
        }
        this.setState({ pages: modified });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="#">
                                Shopping
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    {this.state.pages.map(page => (
                                        <li
                                            key={page.name}
                                            className="nav-item"
                                            onClick={() => {
                                                this.selectPage(page.name);
                                            }}
                                        >
                                            <a className="nav-link" href="#">
                                                {page.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {this.state.pages.map(page =>
                    this.renderPageByDescriptor(page)
                )}
            </div>
        );
    }
}

export default App;
