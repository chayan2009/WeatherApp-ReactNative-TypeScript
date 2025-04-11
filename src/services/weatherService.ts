import axios from 'axios';
import WeatherData from '../types/weatherData';
import { API_KEY, BASE_URL } from '../utils/constants';

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};
