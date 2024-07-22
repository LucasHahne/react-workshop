import React, { useContext } from "react";
import logo from "../images/BookMonkey.png";
import { ThemeContext } from "../domain/theme/ThemeContext";
import { ThemeEditor } from "./ThemeEditor";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  const { primaryColor } = useContext(ThemeContext);
  const links = [
    { path: "/books", text: "Books" },
    { path: "/about", text: "About" },
  ];

  return (
    <div className="app-header">
      <img src={logo} alt="Awesome image" />
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <ThemeEditor></ThemeEditor>
      <nav>
        {links?.map((navLink) => {
          return <NavLink to={navLink.path}>{navLink.text}</NavLink>;
        })}
      </nav>
    </div>
  );
};
