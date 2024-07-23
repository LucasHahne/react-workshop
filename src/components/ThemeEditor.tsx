import React from "react";
import { ThemeContext } from "../domain/theme/ThemeContext";
import { useContext } from "react";

export const ThemeEditor = () => {
  const { otherColors, setPrimaryColor } = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{ backgroundColor: "tomato" }}
        onClick={() => setPrimaryColor("tomato")}
      ></button>
      <button
        style={{ backgroundColor: "olivedrab" }}
        onClick={() => setPrimaryColor("olivedrab")}
      ></button>
      {otherColors?.map((color) => {
        return (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => setPrimaryColor(color)}
          ></button>
        );
      })}
    </div>
  );
};
