import React from "react";
import DateInfo from "./DateInfo";

export default function WeatherMain(props){
    return (
      <div className="main col-sm-6 WeatherMain">
        <div className="main__container">
          <div className="main__containerTemperature">
            {props.data.temperature}<span>°</span>
          </div>
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