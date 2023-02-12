import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Weather.css";
import "./WeatherForecastDay";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState({ loaded: false });
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="WeatherForecast card-group">
          {forecast.map(function (dayForecast, index) {
            if (index < 6) {
              return (
                <WeatherForecastDay dayForecast={dayForecast} key={index} />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    let city = props.data.city;
    let apiKey = `4f6e636etc17733b801df4o7b14ba35b`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
