import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WeatherContext from './WeatherContext';
import WeatherData from '../types/weatherData';
type Props = {
  children: React.ReactNode;
};

const WeatherProvider: React.FC<Props> = ({ children }) => {
  const [weatherData, setWeatherDataState] = useState<WeatherData | null>(null);

  const setWeatherData = async (data: WeatherData | null) => {
    setWeatherDataState(data);
    if (data) {
      await AsyncStorage.setItem('lastWeatherData', JSON.stringify(data));
    } else {
      await AsyncStorage.removeItem('lastWeatherData');
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const saved = await AsyncStorage.getItem('lastWeatherData');
      if (saved) {
        setWeatherDataState(JSON.parse(saved));
      }
    };
    loadData();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
