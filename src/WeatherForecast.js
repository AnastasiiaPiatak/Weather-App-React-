import React from "react";
import "./Weather.css";

export default function WeatherForecast() {
  return (
    <div className="container">
      <div className="WeatherForecast card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="day">TOMORROW</h5>
            <p className="day__emoji">
              <i className="fa-solid fa-cloud-sun-rain"></i>
            </p>
            <p className="day__temperature">
              <span>14°</span>/5°
            </p>
          </div>
        </div>
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
}
