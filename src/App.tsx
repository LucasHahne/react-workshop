import React, { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { ThemeContext } from "./domain/theme/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");
  const [otherColors] = useState(["#CD5C5C", "#717D7E", "#212F3D"]);

  return (
    <ThemeContext.Provider
      value={{ primaryColor, setPrimaryColor, otherColors }}
    >
      <div className="App">
        <AppHeader></AppHeader>
        <Outlet></Outlet>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
