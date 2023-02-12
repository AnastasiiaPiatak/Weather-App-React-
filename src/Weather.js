import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherMain from "./WeatherMain";
import WeatherForecast from "./WeatherForecast";
import SourceLink from "./SourceLink";

export default function Weather(props) {
  let [weather, setWeather] = useState({ loaded: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {      console.log(response.data);

    setWeather({
      loaded: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      feeling: Math.round(response.data.temperature.feels_like),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,
      pressure:response.data.temperature.pressure,
    });
  }

  function searchCity() {
    const apiKey = `4f6e636etc17733b801df4o7b14ba35b`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row align-items-center justify-content-center g-0">
            <WeatherMain data={weather} />
            <div className="addition col-sm-3">
              <div className="addition_container ps-3">
                <div className="addition__search">
                  <div className="Search">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="search"
                        placeholder="Another location"
                        onChange={handleCity}
                      />
                      <input type="submit" value="🔍" />
                    </form>
                  </div>
                </div>

                <div className="addition__description">
                  <div className="addition__description-cloudy">
                    <div>Feels like</div>
                    <div>{weather.feeling} °C</div>
                  </div>

                  <div className="addition__description-humidity">
                    <div>Humidity</div>
                    <div>{weather.humidity} %</div>
                  </div>
                  <div className="addition__description-wind">
                    <div>Wind</div>
                    <div>{weather.wind} km/h</div>
                  </div>
                  <div className="addition__description-rain">
                    <div>Pressure</div>
                    <div>{weather.pressure} hPa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WeatherForecast data={weather} />
        <SourceLink />
      </div>
    );
  } else {
    searchCity();
    return null;
  }
}
