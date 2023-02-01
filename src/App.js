import Search from "./Search";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div>
      <div className="container">
        <div class="row align-items-center justify-content-center g-0">
          <div class="main col-sm-6">
            <div className="main__container">
              <div className="main__containerTemperature">12°</div>
              <div className="main__containerInfo">
                <div className="main__containerInfo-city">London</div>

                <div className="main__containerInfo-date">
                  06:09 - Saturday, 26 Jan `23
                </div>
              </div>

              <div className="main__containerWeather">
                <div className="main__containerWeather-icon">
                  <FontAwesomeIcon icon={faCloudRain} />
                </div>

                <div className="main__containerWeather-description">Rainy</div>
              </div>
            </div>
          </div>
          <div class="addition col-sm-3">
            <div className="addition_container ps-3">
              <div className="addition__search">
                <Search />
              </div>

              <div className="addition__cities">
                <p>
                  <a href="/">Paris</a>
                </p>

                <p>
                  <a href="/">Kyiv</a>
                </p>

                <p>
                  <a href="/">Berlin</a>
                </p>
              </div>
              <hr />

              <div className="addition__description">
                <div className="addition__description-cloudy">
                  <div>Cloudy</div>
                  <div>86 %</div>
                </div>

                <div className="addition__description-humidity">
                  <div>Humidity</div>
                  <div>62 %</div>
                </div>
                <div className="addition__description-wind">
                  <div>Wind</div>
                  <div>2 km/h</div>
                </div>
                <div className="addition__description-rain">
                  <div>Rain</div>
                  <div>8 mm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gitHub">
        <a
          href="https://github.com/AnastasiiaPiatak/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Anastasiia Piatak
      </div>
    </div>
  );
}
