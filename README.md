# Starting the app

## Starting the app itself
- Go to the root directory and run "npm start" there.

## Starting the app tests

- Go to the root directory and run "npm test" there.

# Design decisions

## Code architecture decisions

### Notes

- There are the abstract component base classes "Page" and "App" 
which are to be derived from.

- The "App" component acts as a page manager - rendering the pages and
sharing data between them is its responsibility.

### Usage

- Simply inherit from "App" and add the desired pages by
specifying name, icon, page class type and if the page is to be visible by default.

```
class ShopApp extends App {
    constructor() {
        super();

        this.addPage("Cart", faCartPlus, ProductPage, true);
        this.addPage("Delivery", faTruck, DeliveryPage, false);
        this.addPage("Payment", faCreditCard, PaymentPage, false);
    }
}
```