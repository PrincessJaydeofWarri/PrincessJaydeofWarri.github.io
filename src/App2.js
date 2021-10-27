import React from "react";
import Update from "./components/Update";

import "./App.css";

import AOS from "aos";

function App2() {
  AOS.init();
  return (
    <>
      <Update />
    </>
  );
}

export default App2;
