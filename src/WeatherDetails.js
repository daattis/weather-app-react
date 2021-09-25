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
    <div className="flex-item">
      <div className="grid-container">
        <div className="grid-item">
          <WbSunnyIcon className="details-icon" />
          <p>Sunrise</p>
          <p>{sunrise}</p>
        </div>
        <div className="grid-item">
          <OpacityIcon className="details-icon" />
          <p>Humidity</p>
          <p>{humidity}</p>
        </div>

        <div className="grid-item">
          <ClearAllIcon className="details-icon" />
          <p>Wind</p>
          <p>{wind}</p>
        </div>

        <div className="grid-item">
          <SpeedIcon className="details-icon" />
          <p>Pressure</p>
          <p>{pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
