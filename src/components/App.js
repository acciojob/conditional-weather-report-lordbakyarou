import React from "react";
import "./../styles/App.css";
import data from "../data/data";

const App = () => {
  if (data.temperature > 20) {
    return (
      <div style={{ color: "red" }} id="main">
        <p>Temperature: {data.temperature}</p>
        <p></p>
        <div></div>
        <span>Conditions: {data.conditions}</span>
      </div>
    );
  } else {
    return (
      <div style={{ color: "blue" }} id="main">
        <p>Temperature: {data.temperature}</p>
        <p></p>
        <div></div>
        <span>Conditions: {data.conditions}</span>
      </div>
    );
  }
};

export default App;
