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
specifying name, a FontAwesome icon, page class type and if the page is to be visible by default.

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
requests data collection.
Requesting data collection can be done with the "requestExposedStateUpdate" method.
```
addProduct(name, price, quantity, callback = null) {
	let clonedState = this.cloneState();
	
	...

	this.setState(clonedState, () => {
		// We are doing this in the "setState" callback here, because our "exposeReadOnlyState"
		// depends on the state object and we want it to be up to date before exposing its data.
		this.requestExposedStateUpdate();
		if (callback) callback();
	});
}
```

### Visual design decisions

The design is inspired from the LucidLink web portal - the background image, the side menu layout and
the colors are mostly taken from there.

### Automated testing decisions

Enzyme and Jest were chosen, because they are currently the most popular duo for React testing.

### Resources

Learning React (other than google searches and articles) - https://www.youtube.com/watch?v=Ke90Tje7VS0  
Dynamic component rendering - https://medium.com/@Carmichaelize/dynamic-tag-names-in-react-and-jsx-17e366a684e9  
Sidebar layout template - https://startbootstrap.com/template-overviews/simple-sidebar/  
Learning Enzyme and Jest - https://www.youtube.com/watch?v=aSQ8v9JH5C8&list=PLGDf0elkI13EfDa45q-q1YpAIMBl5mjab  
  
Bootstrap and FontAwesome were used for styling.