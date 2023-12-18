import React from "react";
import "./../styles/App.css";
import data from "../data/data";

const App = () => {
  if (data.temperature > 20) {
    return (
      <div style={{ color: "red" }} id="main">
        <p>Temperature: {data.temperature}</p>
        <span>Conditions: {data.conditions}</span>
        <p>Conditions: {data.conditions}</p>
        <div></div>
      </div>
    );
  } else {
    return (
      <div style={{ color: "blue" }} id="main">
        <p>
          Temperature: {data.temperature} Conditions: {data.conditions}
        </p>
        <span>Conditions: {data.conditions}</span>
        <p></p>
        <div></div>
      </div>
    );
  }
};

export default App;
