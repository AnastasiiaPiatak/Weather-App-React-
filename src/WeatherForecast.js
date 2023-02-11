import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import "./WeatherForecastDay"
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState({ loaded: false });
  let [loaded, setLoaded] = useState(false);


  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  let city = props.data.city;
  let apiKey = `c6o2a4403fb65ced4d0bd7bea2650b1t`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (loaded) {
    return (
      <div className="container">
        <div className="WeatherForecast card-group">
          <WeatherForecastDay dayForecast = {forecast[0]}/>
          {/* <div className="card">
            <div className="card-body">
              <h5 className="day">{forecast.day}</h5>
              <p className="day__emoji">
                <div>
                  <img src={forecast.icon} alt="Forecast icon" />
                </div>
              </p>
              <p className="day__temperature">
                <span>{Math.round(forecast.maxTemperature)}°</span>/
                {Math.round(forecast.minTemperature)}°
              </p>
            </div>
          </div> */}
          <div className="card">
            <div className="card-body">
              <h5 className="day">MON</h5>
              <p className="day__emoji">
                <i className="fa-solid fa-sun"></i>
              </p>
              <p className="day__temperature">
                <span>14°</span>/6°
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="day">TUE</h5>
              <p className="day__emoji">
                <i className="fa-solid fa-cloud-sun"></i>
              </p>
              <p className="day__temperature">
                <span>11°</span>/4°
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="day">WED</h5>
              <p className="day__emoji">
                <i className="fa-solid fa-cloud"></i>
              </p>
              <p className="day__temperature">
                <span>14°</span>/6°
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="day">THU</h5>
              <p className="day__emoji">
                <i className="fa-solid fa-sun"></i>
              </p>
              <p className="day__temperature">
                <span>12°</span>/5°
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="day">FRI</h5>
              <p className="day__emoji">
                <i className="fa-solid fa-cloud-bolt"></i>
              </p>
              <p className="day__temperature">
                <span>13°</span>/4°
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading..";
  }
}
