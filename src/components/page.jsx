import React, { Component } from "react";

class Page extends Component {
    requestExposedStateUpdate = null;

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    getClasses() {
        return "row m-3 " + (this.props.hidden && "d-none");
    }

    // Use this method to expose specific state to the other pages.
    // Make sure that it is read only.
    exposeReadOnlyState() {
        if (new.target === Page) {
            throw new TypeError("Method not implemented.");
        }
    }

    // Do NOT override this method in a subclass - use renderPage instead.
    render() {
        return (
            <div ref={this.myRef} className={this.getClasses()}>
                {this.renderPage()}
            </div>
        );
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
