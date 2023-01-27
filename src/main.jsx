import React from "react";
import ReactDOM from "react-dom/client";
import CheckAnswersBtn from "../components/Button";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <CheckAnswersBtn />
  </React.StrictMode>
);
