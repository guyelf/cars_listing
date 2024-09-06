import App from "./App";
import "bulma/css/bulma.css";
import "./styles.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
