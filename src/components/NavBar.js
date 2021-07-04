import React from "react";
import "../stylesheets/NavBar.css";

export default function NavBar() {
  return (
    <div>
      <h1 className="nav-bar-h1">Plexicz™</h1>
      <p className="index-p-about">About</p>
      <h1 className="bars">
        <i className="fas fa-bars"></i>
      </h1>
    </div>
  );
}
