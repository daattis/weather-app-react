import React from "react";
import "./WeatherPage.css";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import OpacityIcon from "@material-ui/icons/Opacity";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import SpeedIcon from "@material-ui/icons/Speed";

const WeatherDetails = ({ weather }) => {
  const humidity = weather.main.humidity;
  const pressure = weather.main.pressure;
  const wind = weather.wind.speed;
  let unix_timestamp = weather.sys.sunrise;
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let sunrise = hours + ":" + minutes.substr(-2);

  return (
    <div className="weatherinfo-container flex-item">
      <div className="flex-item">
        <WbSunnyIcon className="details-icon" />
        <p className="weather-details-text">Sunrise</p>
        <p className="weather-details-text">{sunrise}</p>
      </div>
      <div className="flex-item">
        <OpacityIcon className="details-icon" />
        <p className="weather-details-text">Humidity</p>
        <p className="weather-details-text">{humidity} %</p>
      </div>

      <div className="flex-item">
        <ClearAllIcon className="details-icon" />
        <p className="weather-details-text">Wind</p>
        <p className="weather-details-text">{wind}</p>
      </div>

      <div className="flex-item">
        <SpeedIcon className="details-icon" />
        <p className="weather-details-text">Pressure</p>
        <p className="weather-details-text">{pressure} Pa</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
