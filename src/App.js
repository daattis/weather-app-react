import React, { useState } from 'react';
import './App.css';
import SearchPage from './SearchPage';
import WeatherPage from './WeatherPage';
const dotenv = require('dotenv').config();

function App() {

  const [inputText, setInputText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
 

  //TÄMÄ ON KESKEN
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(inputText) + "&appid=" + process.env.OPENWEATHER_APIKEY + "&units=metric";
  

  const handleChange = (event) => {
    let newCity = event.target.value;
    setInputText(newCity);
  }
 
     //fetch data from api
  const onSearch = (event) => {
 
    event.preventDefault();
    console.log(inputText)
    console.log("Avain on: " + process.env.OPENWEATHER_APIKEY);

    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(result);
      }, 
      (error) => {
        setIsLoaded(true);
        setError(error);
        console.log("Error in fetch")
      })

      // make an if statement if there is an error, display it. Or if data isn't finished loading, display "loading..." and else return the data

  }

//tarkistetaan onko inputtext tyhjä, ja alle ehto mikä sivu näytetään
  return (
    <div className="search-box">
    <h1 className="header">My weather app</h1>
     
    {city && weather ? (
        <WeatherPage weather={weather} city={city} />
      ) : (
        <SearchPage onSearch={onSearch} handleChange={handleChange} inputText={inputText}/>
      )} 
        
     </div>
  );
  }


export default App;
