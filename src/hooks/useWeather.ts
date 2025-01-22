import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUnits } from '../store/selectors/selectors';
import { Weather, WeatherData } from '../types/types';

export const useWeather = (cityName: string) => {
  const [weather, setWeather] = useState<WeatherData>();
  const units = useSelector(selectUnits);

  const mapWeatherData = (weather: any, units: string): WeatherData => {
    const nextDaysWeather: Weather[] = weather.forecast.forecastday.map(
      (day: any) => ({
        currentTemp: getTempByUnits(
          weather.current.temp_c,
          weather.current.temp_f,
          units
        ),
        minTemp: getTempByUnits(day.day.mintemp_c, day.day.mintemp_f, units),
        maxTemp: getTempByUnits(day.day.maxtemp_c, day.day.maxtemp_f, units),
        windSpeed: `${day.day.maxwind_mph} mph`,
        date: day.date,
        condition: {
          text: day.day.condition.text,
          icon: `https:${day.day.condition.icon}`,
        },
      })
    );

    return {
      current: nextDaysWeather[0],
      nextDays: nextDaysWeather.slice(1),
    };
  };

  useEffect(() => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=a1823973b5a44cc496a133804252201&q=${cityName}&days=7`;
    fetch(url)
      .then((res) => {
        res.json().then((weather) => {
          setWeather(mapWeatherData(weather, units));
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cityName, units]);

  return weather;
};

const getTempByUnits = (tempC: number, tempF: number, units: string) =>
  units === '°C' ? `${tempC}°C` : `${tempF}°F`;
