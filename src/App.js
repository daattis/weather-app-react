import React, { useState } from "react";
import "./App.css";
import SearchPage from "./SearchPage";
import WeatherPage from "./WeatherPage";
import Footer from "./Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [showWeather, updateShowWeather] = useState(false);

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) + "&appid=c3fb8a5ed9dfef15a7c6b70a013faf95&units=metric";

  const handleChange = (event) => {
    let newCity = event.target.value;
    updateCity(newCity);
  };
  const onClick = () => {
    updateShowWeather(false);
  };

  //fetch data from api
  const onSearch = (event) => {
    event.preventDefault();

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          updateWeather(result);
          updateShowWeather(true);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("Error in fetch:");
        }
      );

    // make an if statement if there is an error, display it. Or if data isn't finished loading, display "loading..." and else return the data
  };

  //tarkistetaan onko inputtext tyhjä, ja alle ehto mikä sivu näytetään
  return (
    <div>
      <h1 className="header">My weather app</h1>
      {showWeather ? <WeatherPage weather={weather} city={city} onClick={onClick} /> : <SearchPage onSearch={onSearch} handleChange={handleChange} />}
      <Footer />
    </div>
  );
}

export default App;
