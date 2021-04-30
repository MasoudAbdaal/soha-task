import React from "react";
import ReactDOM from "react-dom";
import reducer from "./store/reducers/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

//create store for redux
const store = createStore(
  reducer,
  //For Redux-Devtool  use in project
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
