import React, {useState} from "react";
import Search from "./Search";
import "./Weather.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  
  let [weather, setWeather] = useState({loaded:false});



  function handleResponse(response){
    console.log(response.data);
    setWeather({
      loaded:true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      feeling: Math.round(response.data.temperature.feels_like),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.condition.icon_url,

      // rain: Math.round(response.data.temperature.rain)
    });
  }

  if(weather.loaded){
     return (
       <div className="Weather">
         <div className="container">
           <div className="row align-items-center justify-content-center g-0">
             <div className="main col-sm-6">
               <div className="main__container">
                 <div className="main__containerTemperature">
                   {weather.temperature}°
                 </div>
                 <div className="main__containerInfo">
                   <div className="main__containerInfo-city">
                     {weather.city}
                   </div>

                   <div className="main__containerInfo-date">
                     06:09 - Saturday, 26 Jan `23
                   </div>
                 </div>

                 <div className="main__containerWeather">
                   <div className="main__containerWeather-icon">
                    <img src={weather.icon} alt={weather.description}/>
                   </div>

                   <div className="main__containerWeather-description">
                     {weather.description}
                   </div>
                 </div>
               </div>
             </div>
             <div className="addition col-sm-3">
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
                     <div>Feels like</div>
                     <div>{weather.feeling}°</div>
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
  } else{
    const apiKey = `c6o2a4403fb65ced4d0bd7bea2650b1t`;
  let city = (props.defaultCity);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return 'Loading..'
  }



  

 
}