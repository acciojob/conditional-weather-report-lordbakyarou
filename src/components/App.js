import React from "react";
import "./../styles/App.css";
import data from "../data/data";

const App = () => {
  if (data.temperature > 20) {
    return (
      <div style={{ color: "red" }}>
        <p>
          {" "}
          Current Temp: {data.temperature}, Current condition :{" "}
          {data.conditions}
        </p>
      </div>
    );
  } else {
    return (
      <div style={{ color: "blue" }}>
        <p>
          {" "}
          Current Temp: {data.temperature}, Current condition :{" "}
          {data.conditions}
        </p>
      </div>
    );
  }
};

export default App;
