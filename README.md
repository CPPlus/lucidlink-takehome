## Starting the app

### Starting the app itself
- Go to the root directory and run "npm start" there.

### Starting the app tests

- Go to the root directory and run "npm test" there.

## Design decisions

### Code architecture decisions

- There are the abstract component base classes "Page" and "App" 
which are to be derived from.

- The "App" component acts as a page manager - rendering the pages and
sharing data between them is its responsibility.

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

- If a page is to have some data shared across other pages this page
will need to have its "exposeReadOnlyState" method overridden. This
method has to return the data that is to be exposed.

Example from src/components/jsx/productPage.jsx
```
exposeReadOnlyState() {
	return { total: this.calculateTotal() };
}
```

Then this method is automatically called when this very same page
requests data collection:
```
addProduct(name, price, quantity, callback = null) {
	let clonedState = this.cloneState();
	
	...

	this.setState(clonedState, () => {
		// This is a reqest for the page manager component to collect this pages data.
		// Simply call the "requestExposedStateUpdate" when you want this to happen.
		// We are doing this in the "setState" callback here, because our "exposeReadOnlyState"
		// depends on the state object.
		this.requestExposedStateUpdate();
		if (callback) callback();
	});
}
```