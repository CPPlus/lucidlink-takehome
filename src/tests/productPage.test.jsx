import React from "react";
import ProductPage from "../components/jsx/productPage.jsx";
import { shallow } from "enzyme";

describe("Product page", () => {
    it("Starts with 0 records", () => {
        const wrapper = shallow(<ProductPage />);
        const state = wrapper.state();
        expect(state.productList.length).toEqual(0);
    });

    it("Can't add a record when fields don't contain data", () => {
        const wrapper = shallow(<ProductPage />);

        const addButton = wrapper.find("#productAddButton");
        addButton.simulate("click");

        expect(wrapper.state().productList.length).toEqual(0);
    });

    it("Can't add a record when some fields contain data, but not all", () => {
        const wrapper = shallow(<ProductPage />);
        const addButton = wrapper.find("#productAddButton");
        const productNameInput = wrapper.find("#productName");

        productNameInput.simulate("change", {
            target: { value: "New Test Product" }
        });
        addButton.simulate("click");

        expect(wrapper.state().productList.length).toEqual(0);
    });
});
