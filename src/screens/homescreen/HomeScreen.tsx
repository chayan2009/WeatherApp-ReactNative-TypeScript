import React, { useState, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { fetchWeatherByCity } from '../../services/weatherService';
import styles from './HomeScreen.styles';
import GenericTextInput from '../../components/GenericTextInput';
import GenericButton from '../../components/GenericButton';
import WeatherScreen from '../../components/WeatherScreen';
import useWeather from '../../context/useWeather';

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { weatherData, setWeatherData } = useWeather();

  const handleFetchWeather = useCallback(
    async (cityName?: string) => {
      const searchCity = cityName || city;
      if (!searchCity) return;

      setLoading(true);
      setError('');
      try {
        const data = await fetchWeatherByCity(searchCity);
        setWeatherData(data);
      } catch (err) {
        setError('City not found. Please try again!');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    },
    [city, setWeatherData]
  );

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarTitle}>Weather App</Text>
      </View>
      <GenericTextInput
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <GenericButton title="Get Weather" onPress={() => handleFetchWeather()} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error !== '' && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      {weatherData && <WeatherScreen weatherData={weatherData} />}
    </View>
  );
};

export default HomeScreen;
