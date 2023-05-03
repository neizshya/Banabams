import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalProvider } from "react-modal-hook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
