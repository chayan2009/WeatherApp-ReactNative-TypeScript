import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {fetchWeatherByCity} from '../../services/weatherService';
import WeatherData from '../../types/weatherData';
import styles from './HomeScreen.styles';
import GenericTextInput from '../../components/GenericTextInput';
import GenericButton from '../../components/GenericButton';
import WeatherScreen from '../../components/WeatherScreen';

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError('City not found. Please try again!!!!!');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

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
      <GenericButton title="Get Weather" onPress={handleFetchWeather} />
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
