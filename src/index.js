import React from "react";
import { render } from "react-dom";
import Shop from "./components/Shop";
import "./index.css";

function App() {
  return <Shop />;
}

render(<App />, document.querySelector("#root"));
