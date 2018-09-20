import React, { Component } from "react";

class Page extends Component {
    getClasses() {
        return "row m-3 " + (this.props.hidden && "d-none");
    }

    // Do NOT override this method in a subclass - use renderPage instead.
    render() {
        return <div className={this.getClasses()}>{this.renderPage()}</div>;
    }

    // Use this method to render the pages pody instead of the render one
    // by overriding it in the subclass.
    renderPage() {
        if (new.target === Page) {
            throw new TypeError("Method not implemented.");
        }
    }
}

export default Page;
