import React from "react";
import DateInfo from "./DateInfo";
import MainTemperature from "./MainTemperature";

export default function WeatherMain(props) {
  return (
    <div className="main col-md-6 WeatherMain">
      <div className="main__container">
        <MainTemperature celsius={props.data.temperature} />

        <div className="main__containerInfo">
          <div className="main__containerInfo-city">{props.data.city}</div>

          <div className="main__containerInfo-date">
            <DateInfo date={props.data.date} />
          </div>
        </div>

        <div className="main__containerWeather">
          <div className="main__containerWeather-icon">
            <img src={props.data.icon} alt={props.data.description} />
          </div>

          <div className="main__containerWeather-description">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
