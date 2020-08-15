import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Routes from "./Routes";
import reducers from "./reducers";
import "./styles/reset.scss";
import "./styles/common.scss";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
