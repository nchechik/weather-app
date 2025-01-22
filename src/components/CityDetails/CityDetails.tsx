import React from 'react';
import './CityDetails.css';
import { CityData, Weather } from '../../types/types';

const CityDetails: React.FC<{ city: CityData; weather: Weather }> = ({
  city,
  weather,
}) => {
  return (
    <div className="city-details-container">
      <div className="grid">
        <div className="city-image-container">
          <img src={city.image} alt={city.name} className="city-image" />
        </div>
        <div className="city-info">
          <h1 className="city-name">{city.name}</h1>
          <p className="city-country">
            {city.continent}, {city.country}
          </p>
          <p className="city-description">{city.description}</p>
        </div>
        <div className="weather-details">
          <h2>{weather.currentTemp}</h2>
          <img
            src={weather.condition.icon}
            alt={weather.condition.text}
            className="weather-icon"
          />
          <p className="weather-condition">{weather.condition.text}</p>
          <p className="temperature">
            Min: {weather.minTemp} | Max: {weather.maxTemp}
          </p>
          <p className="wind-speed">Wind: {weather.windSpeed}</p>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
