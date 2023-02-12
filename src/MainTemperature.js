import React from "react";

export default function MainTemperature(props) {
  return (
    <div className="main__containerTemperature MainTemperature">
      {props.celsius}
      <span>°</span>
    </div>
  );
}
