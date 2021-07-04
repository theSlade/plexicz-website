import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Components
import NavBar from "./components/NavBar";

// Pages
import HomePage from "./pages/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
