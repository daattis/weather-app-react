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
 
  const options = {
    method: 'POST',
    auth: process.env.OPENWEATHER_APIKEY
  }
  //const url = https://api.openweathermap.org/data/2.5/weather?q={newCity}&appid={env.APIKEY}&units=metric;

  const handleChange = (event) => {
    let newCity = event.target.value;
    setInputText(newCity);
  }
  
  const onSearch = (event) => {
    //function which fetches data from api
    event.preventDefault();
    console.log(inputText)

    fetch("https://api.openweathermap.org/data/2.5/weather?q={inputText}&appid={options.auth}&units=metric")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        console.log(items);
      }, 
      (error) => {
        setIsLoaded(true);
        setError(error);
      })

      // make an if statement if there is an error, display it. Or if data isn't finished loading, display "loading..." and else return the data

  }

//tarkistetaan onko inputtext tyhjä, ja alle ehto mikä sivu näytetään
  return (
    <div>
      <SearchPage onSearch={onSearch} handleChange={handleChange} inputText={inputText}/>
     {/* <WeatherPage
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />*/ }
    </div>
  );
}

export default App;
