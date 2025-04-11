import { useContext } from 'react';
import WeatherContext from './WeatherContext';

const useWeather = () => {
  return useContext(WeatherContext);
};

export default useWeather;
