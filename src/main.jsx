import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.min.css";


const div = (
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);
