import React from "react";
import ProductPage from "../components/productPage";
import { shallow } from "enzyme";

describe("Product page", () => {
    it("Starts with 5 records", () => {
        const wrapper = shallow(<ProductPage />);
        const state = wrapper.state();
        expect(state.productList.length).toEqual(5);
    });
});
