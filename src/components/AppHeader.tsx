import React from "react";
import logo from "../images/BookMonkey.png";

export const AppHeader = () => {
  return (
    <div className="app-header">
      <img src={logo} alt="Awesome image" />
      <h1>Bookmonkey</h1>
    </div>
  );
};
