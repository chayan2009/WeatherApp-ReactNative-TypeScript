import { createContext } from 'react';
import WeatherData from '../types/weatherData';
export type WeatherContextType = {
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData | null) => void;
};

const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  setWeatherData: () => {},
});

export default WeatherContext;
