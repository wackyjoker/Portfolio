import React from "react";
import jQuery from "jquery";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouters from "./routers/AppRouters";
import configureStore from "./containers/configureStore";
import "./styles/style.scss";

const store = configureStore();

window.$ = window.jQuery = jQuery;

const action = {
  type: "SHOW_BAR",
  payload: {
    newState: "new roll"
  }
};

const jsx = (
  <Provider store={store}>
    <AppRouters />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
