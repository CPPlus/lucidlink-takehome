import React from "react";
import Page from "./page";

class ProductPage extends Page {
    constructor() {
        super();

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    state = {
        currentProduct: {
            id: 1,
            name: "",
            price: 0,
            quantity: 0
        },
        productList: []
    };

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

    addProduct() {
        let clonedState = this.cloneState();
        clonedState.productList.push(
            Object.assign({}, this.state.currentProduct)
        );
        clonedState.currentProduct.id++;
        this.setState(clonedState);
    }

    removeProduct(id) {
        let clonedState = this.cloneState();
        clonedState.productList = clonedState.productList.filter(
            p => p.id !== id
        );
        console.log(this.state.productList);
        console.log(clonedState.productList);
        this.setState(clonedState);
    }

    renderPage() {
        return (
            <div className="col">
                <div className="row">
                    <h4>Product Page</h4>
                </div>
                {this.state.productList.map(product => (
                    <div key={product.id} className="row">
                        <div className="col">{product.name}</div>
                        <div className="col">{product.price}</div>
                        <div className="col">{product.quantity}</div>
                        <button
                            type="submit"
                            className="btn-sm btn-warning col"
                            onClick={() => {
                                this.removeProduct(product.id);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div className="row">
                    <div className="col">
                        <form className="form-row">
                            <div className="form-group col">
                                <label htmlFor="productName">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    aria-describedby="productNameHelp"
                                    placeholder="Name"
                                    value={this.state.currentProduct.name}
                                    onChange={e => {
                                        this.updateCurrentProductName(
                                            e.target.value
                                        );
                                    }}
                                />
                                <small
                                    id="productNameHelp"
                                    className="form-text text-muted"
                                >
                                    Come up with any name.
                                </small>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="productPrice">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="productPrice"
                                    placeholder="Price"
                                    value={this.state.currentProduct.price}
                                    onChange={e => {
                                        this.updateCurrentProductPrice(
                                            e.target.value
                                        );
                                    }}
                                />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="productQuantity">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="productQuantity"
                                    placeholder="Quantity"
                                    value={this.state.currentProduct.quantity}
                                    onChange={e => {
                                        this.updateCurrentProductQuantity(
                                            e.target.value
                                        );
                                    }}
                                />
                            </div>
                            <div className="col">
                                <button
                                    type="button"
                                    className="btn-sm btn-primary col"
                                    onClick={this.addProduct}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPage;
