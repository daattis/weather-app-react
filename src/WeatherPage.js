import React from "react";
import WeatherDetails from "./WeatherDetails";
import "./WeatherPage.css";
import BackToSearch from "./BackToSearch";
import RoomIcon from "@material-ui/icons/Room";

const WeatherPage = ({ weather, city, onClick }) => {
  let weatherIcon = "perfect-day";
  const url = "./icons/" + encodeURIComponent(weatherIcon) + ".svg";
  const weatherIconId = weather.weather[0].icon;

  if (weatherIconId === "02d" || weatherIconId === "03d" || weatherIconId === "04d") {
    weatherIcon = "perfect-day";
  } else if (weatherIconId === "10d" || weatherIconId === "10n") {
    weatherIcon = "rain";
  } else if (weatherIconId === "09d" || weatherIconId === "09n") {
    weatherIcon = "cloudy";
  } else if (weatherIconId === "02n" || weatherIconId === "03n" || weatherIconId === "04n") {
    weatherIcon = "cloudy-night";
  } else if (weatherIconId === "11d" || weatherIconId === "11n") {
    weatherIcon = "storm";
  } else if (weatherIconId === "01d" || weatherIconId === "01n") {
    weatherIcon = "sunny";
  } else if (weatherIconId === "10n") {
    weatherIcon = "rain-night";
  }

  return (
    <div className="container">
      <div className="city-container flex-item">
        <RoomIcon className="map-icon" />
        <h2 className="city">{city}</h2>
      </div>
      <div className="temperature-flex-item temperature-container">
        <p className="temperature temperature-flex-item">{weather.main.temp}°</p>
        <img className="temperature-flex-item weather-image" src={url} alt="weathericon" />
      </div>
      <WeatherDetails weather={weather} />

      <BackToSearch onClick={onClick} />
    </div>
  );
};

export default WeatherPage;
