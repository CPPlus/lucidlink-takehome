import React from "react";
import ProductPage from "../components/jsx/productPage";
import { shallow, mount } from "enzyme";
import ShopApp from "../shopApp";

describe("Shop app", () => {
    it("Product page starts with 5 records", () => {
        const wrapper = mount(<ShopApp />);
        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(5);
    });

    it("Can't add more records if no fields have values", () => {
        const wrapper = mount(<ShopApp />);

        const productAddButton = wrapper.find("#productAddButton");
        productAddButton.simulate("click");

        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(5);
    });

    it("Can't add more records if only some fields have values", () => {
        const wrapper = mount(<ShopApp />);

        const input = wrapper.find("#productName");
        input.simulate("change", { target: { value: "New Test Product" } });

        const productAddButton = wrapper.find("#productAddButton");
        productAddButton.simulate("click");

        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(5);
    });

    it("Can add more records if all fields have values", () => {
        const wrapper = mount(<ShopApp />);

        wrapper
            .find("#productName")
            .simulate("change", { target: { value: "New Test Product" } });
        wrapper
            .find("#productPrice")
            .simulate("change", { target: { value: 25 } });
        wrapper
            .find("#productQuantity")
            .simulate("change", { target: { value: 3 } });

        const productAddButton = wrapper.find("#productAddButton");
        productAddButton.simulate("click");

        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(6);
    });

    it("Can delete half the records", () => {
        const wrapper = mount(<ShopApp />);

        for (let i = 0; i < 3; i++) {
            wrapper
                .find(".removeProductButton")
                .first()
                .simulate("click");
        }

        const productAddButton = wrapper.find("#productAddButton");
        productAddButton.simulate("click");

        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(2);
    });

    it("Can delete all records", () => {
        const wrapper = mount(<ShopApp />);

        for (let i = 0; i < 5; i++) {
            wrapper
                .find(".removeProductButton")
                .first()
                .simulate("click");
        }

        const productAddButton = wrapper.find("#productAddButton");
        productAddButton.simulate("click");

        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(0);

        expect(wrapper.find(".noRecordsInfo").length).toEqual(1);
    });

    it("Price can be read from Payment page", () => {
        const wrapper = mount(<ShopApp />);

        for (let i = 0; i < 5; i++) {
            wrapper
                .find(".removeProductButton")
                .first()
                .simulate("click");
        }

        wrapper
            .find("#productName")
            .simulate("change", { target: { value: "New Test Product" } });
        wrapper
            .find("#productPrice")
            .simulate("change", { target: { value: 25 } });
        wrapper
            .find("#productQuantity")
            .simulate("change", { target: { value: 3 } });

        const productAddButton = wrapper.find("#productAddButton");
        productAddButton.simulate("click");

        wrapper
            .find("#productName")
            .simulate("change", { target: { value: "New Test Product" } });
        wrapper
            .find("#productPrice")
            .simulate("change", { target: { value: 2.5 } });
        wrapper
            .find("#productQuantity")
            .simulate("change", { target: { value: 1 } });

        productAddButton.simulate("click");

        const rows = wrapper.find(".productRow");
        expect(rows.length).toEqual(2);

        expect(
            wrapper
                .find(".highlightText")
                .text()
                .trim()
        ).toEqual("Total: 77.5");
    });
});
