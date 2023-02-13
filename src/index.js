import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

// import styling for whole website
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
