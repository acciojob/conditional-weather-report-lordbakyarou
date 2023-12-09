import React from "react";
import "./../styles/App.css";
import data from "../data/data";

const App = () => {
  if (data.temperature > 20) {
    return (
      <div style={{ color: "red" }}>
        <p>Temperature: {data.temperature}</p>
      </div>
    );
  } else {
    return (
      <div style={{ color: "blue" }}>
        <p>Temperature: {data.temperature}</p>
      </div>
    );
  }
};

export default App;
