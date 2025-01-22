import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { CityData } from '../../types/types';
import './WeatherPage.css';
import { useWeather } from '../../hooks/useWeather';
import CityDetails from '../../components/CityDetails/CityDetails';

export const WeatherPage: React.FC = () => {
  const history = useHistory();
  const {
    state: { city },
  } = useLocation<{ city: CityData }>();

  const weather = useWeather(city.name);

  const onBackClick = () => {
    history.push(`/`);
  };

  return (
    <div className="weather-container">
      <h2 onClick={onBackClick} className="back-button">
        {'< Back'}
      </h2>
      {weather && <CityDetails city={city} weather={weather?.current} />}
      <div className="weather-grid-container">
        <h2>Weather Forecast for Next Days</h2>
        <div className="weather-grid">
          {weather &&
            weather.nextDays.map((dayWeather, index) => (
              <div key={index} className="weather-card">
                <h3 className="date">{dayWeather.date}</h3>
                <img
                  src={dayWeather.condition.icon}
                  alt={dayWeather.condition.text}
                  className="weather-icon"
                />
                <p className="condition">{dayWeather.condition.text}</p>
                <p className="temperature">
                  Min: {dayWeather.minTemp} | Max: {dayWeather.maxTemp}
                </p>
                <p className="wind-speed">Wind: {dayWeather.windSpeed}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
