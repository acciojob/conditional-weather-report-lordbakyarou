import React from "react";
import "./../styles/App.css";
import data from "../data/data";

const App = () => {
  if (data.temperature > 20) {
    return (
      <div style={{ color: "red" }}>
        Current Temp: {data.temperature}, Current condition : {data.conditions}
      </div>
    );
  } else {
    return (
      <div style={{ color: "blue" }}>
        Current Temp: {data.temperature}, Current condition : {data.conditions}
      </div>
    );
  }
};

export default App;
