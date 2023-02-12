import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.dayForecast.temperature.maximum);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.dayForecast.temperature.minimum);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.dayForecast.time * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div className="card WeatherForecastDay">
      <div className="card-body">
        <h5 className="day">{day()}</h5>
        <div className="day__emoji">
          <div>
            <img
              src={props.dayForecast.condition.icon_url}
              alt="Forecast icon"
            />
          </div>
        </div>
        <p className="day__temperature">
          <span>{maxTemperature()}</span>/{minTemperature()}{" "}
        </p>
      </div>
    </div>
  );
}
