import React from "react";
import Page from "./page";
import "../css/productPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import NoRecordsInfo from "./noRecordsInfo";

class ProductPage extends Page {
    constructor() {
        super();

        this.state = {
            currentProduct: {
                id: 1,
                name: "",
                price: "",
                quantity: ""
            },
            productCanBeAdded: false,
            productList: []
        };

        this.addProductFromState = this.addProductFromState.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    validateEmptyRenderSmall(id, value) {
        if (value) return null;
        else
            return (
                <small id={id} className="form-text required">
                    Required
                </small>
            );
    }

    fieldsAreValid() {
        let cp = this.state.currentProduct;
        let result = cp.name != "" && cp.price != "" && cp.quantity != "";
        return result;
    }

    componentDidMount() {
        let products = [
                ["House", 100000, 1],
                ["Apple", 0.3, 4],
                ["Laptop", 2000, 1],
                ["English Tea", 15, 2],
                ["Car", 15000, 1]
            ],
            currentProduct = 0,
            _this = this,
            addProducts = function() {
                if (currentProduct >= products.length) return;

                _this.addProduct.apply(
                    _this,
                    products[currentProduct++].concat([addProducts])
                );
            };
        addProducts();
    }

    updateCurrentProductName(name) {
        let clonedState = this.cloneState();
        clonedState.currentProduct.name = name;
        this.setState(clonedState);
    }

    updateCurrentProductPrice(price) {
        let clonedState = this.cloneState();
        clonedState.currentProduct.price = price;
        this.setState(clonedState);
    }

    updateCurrentProductQuantity(quantity) {
        let clonedState = this.cloneState();
        clonedState.currentProduct.quantity = quantity;
        this.setState(clonedState);
    }

    cloneState() {
        return JSON.parse(JSON.stringify(this.state));
    }

    addProductFromState() {
        if (!this.fieldsAreValid()) return;
        let product = this.state.currentProduct;
        this.addProduct(product.name, product.price, product.quantity);
    }

    addProduct(name, price, quantity, callback = null) {
        let clonedState = this.cloneState();
        clonedState.productList.push(
            Object.assign(
                {},
                {
                    id: this.state.currentProduct.id,
                    name: name,
                    price: price,
                    quantity: quantity
                }
            )
        );
        clonedState.currentProduct.id++;
        clonedState.currentProduct.name = "";
        clonedState.currentProduct.price = "";
        clonedState.currentProduct.quantity = "";
        this.setState(clonedState, () => {
            this.props.requestExposedStateUpdate(
                this.exposeReadOnlyState.bind(this)
            );
            if (callback) callback();
        });
    }

    exposeReadOnlyState() {
        return { total: this.calculateTotal() };
    }

    removeProduct(id) {
        let clonedState = this.cloneState();
        clonedState.productList = clonedState.productList.filter(
            p => p.id !== id
        );
        this.setState(clonedState, () => {
            this.props.requestExposedStateUpdate(
                this.exposeReadOnlyState.bind(this)
            );
        });
    }

    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.state.productList.length; i++) {
            total +=
                this.state.productList[i].price *
                this.state.productList[i].quantity;
        }
        return total;
    }

    renderPage() {
        return (
            <div className="col">
                <div className="row">
                    <h4 className="headerCaption">Cart</h4>
                </div>
                <div id="productRowHeader" className="row headerTextColors">
                    <div className="col">Name</div>
                    <div className="col">Price</div>
                    <div className="col">Quantity</div>
                    <div className="col" />
                </div>
                {
                    <NoRecordsInfo
                        areRecords={this.state.productList.length > 0}
                    />
                }
                {this.state.productList.map(product => (
                    <div key={product.id} className="row productRow">
                        <div className="col">{product.name}</div>
                        <div className="col">
                            {product.price}{" "}
                            <FontAwesomeIcon icon={faEuroSign} />
                        </div>
                        <div className="col">{product.quantity}</div>
                        <div className="col text-right">
                            <button
                                className="btn btn-sm btn-warning removeProductButton"
                                onClick={() => {
                                    this.removeProduct(product.id);
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                ))}
                <div id="productAddSection" className="row headerTextColors">
                    <div className="col">
                        <form className="form-row">
                            <div className="form-group col">
                                <input
                                    type="text"
                                    autoComplete="off"
                                    className="form-control form-control-sm"
                                    id="productName"
                                    placeholder="Name"
                                    value={this.state.currentProduct.name}
                                    onChange={e => {
                                        this.updateCurrentProductName(
                                            e.target.value
                                        );
                                    }}
                                />
                                {this.validateEmptyRenderSmall(
                                    "productName",
                                    this.state.currentProduct.name
                                )}
                            </div>
                            <div className="form-group col">
                                <input
                                    min="0"
                                    step="1"
                                    type="number"
                                    placeholder="Price"
                                    className="form-control form-control-sm"
                                    id="productPrice"
                                    value={this.state.currentProduct.price}
                                    onChange={e => {
                                        this.updateCurrentProductPrice(
                                            e.target.value
                                        );
                                    }}
                                />
                                {this.validateEmptyRenderSmall(
                                    "productPrice",
                                    this.state.currentProduct.price
                                )}
                            </div>
                            <div className="form-group col">
                                <input
                                    type="number"
                                    min="0"
                                    step="1"
                                    placeholder="Quantity"
                                    className="form-control form-control-sm"
                                    id="productQuantity"
                                    value={this.state.currentProduct.quantity}
                                    onChange={e => {
                                        this.updateCurrentProductQuantity(
                                            e.target.value
                                        );
                                    }}
                                />
                                {this.validateEmptyRenderSmall(
                                    "productQuantity",
                                    this.state.currentProduct.quantity
                                )}
                            </div>
                            <div className="col">
                                <button
                                    id="productAddButton"
                                    type="button"
                                    className={
                                        "btn-sm btn-primary col" +
                                        (this.fieldsAreValid()
                                            ? ""
                                            : " required")
                                    }
                                    onClick={this.addProductFromState}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <h5 className="highlightText float-right">
                    Total: {this.calculateTotal()}{" "}
                    <FontAwesomeIcon icon={faEuroSign} />
                </h5>
            </div>
        );
    }
}

export default ProductPage;
