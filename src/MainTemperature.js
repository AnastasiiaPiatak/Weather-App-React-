import React, { useState } from "react";

export default function MainTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahr(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="main__containerTemperature MainTemperature">
        {props.celsius}
        <a href="/" onClick={convertFahr}>
          °C
        </a>
      </div>
    );
  } else {
    return (
      <div className="main__containerTemperature MainTemperature">
        {Math.round(fahrenheit())}
        <a href="/" onClick={convertCels} >
          °F
        </a>
      </div>
    );
  }
}
