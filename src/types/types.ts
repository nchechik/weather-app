export type Coordinates = { lat: number; lng: number };

export interface CityData {
  name: string;
  continent: string;
  active: boolean;
  country: string;
  description: string;
  image: string;
  coords: Coordinates;
}

export interface Weather {
  minTemp: string;
  maxTemp: string;
  currentTemp: string;
  windSpeed: string;
  date: string;
  condition: {
    text: string;
    icon: string;
  };
}

export interface WeatherData {
  current: Weather;
  nextDays: Weather[];
}
