import React from "react";
import "./../styles/App.css";
import data from "../data/data";

const App = () => {
  return (
    <div>
      {(data.temperature > 20 && (
        <p style={{ color: "red" }}>
          Current Temp : {data.temperature}, Current Conditions:
          {data.conditions}
        </p>
      )) || (
        <p style={{ color: "blue" }}>
          Current Temp : {data.temperature}, Current Conditions:
          {data.conditions}
        </p>
      )}
    </div>
  );
};

export default App;
