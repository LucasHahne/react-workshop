import React from "react";
import { AppHeader } from "./components/AppHeader";
import { InfoHeader } from "./components/InfoHeader";
import { BookList } from "./components/BookList";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      {/* <InfoHeader props={}></InfoHeader> */}
      <BookList></BookList>
    </div>
  );
}

export default App;
