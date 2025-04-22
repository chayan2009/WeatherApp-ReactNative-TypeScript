import { useState, useCallback } from 'react';
import { fetchWeatherByCity } from '../services/weatherService';
import WeatherData from '../types/weatherData';

export const useWeatherData = () => {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError('Please enter a valid city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByCity(city.trim());
      if (data) {
        setWeatherData(data);
      } else {
        setError('City not found. Please try again!');
        setWeatherData(null);
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again!');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { weatherData, loading, error, fetchWeather };
};
