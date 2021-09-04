import React from 'react';
import WeatherCondition from './WeatherCondition';

const WeatherPage = ({weather, city}) => {
    return <div>
    <h2>This is the Weather Page</h2>
    <WeatherCondition/>
    </div>
}

export default WeatherPage;