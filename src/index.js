import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ShopApp from "./shopApp";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(<ShopApp />, document.getElementById("root"));
registerServiceWorker();
