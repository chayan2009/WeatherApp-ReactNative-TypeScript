import React, { useState, useCallback } from 'react';
import { View, Text, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import baseStyles from './HomeScreen.styles';
import GenericTextInput from '../../components/GenericTextInput';
import GenericButton from '../../components/GenericButton';
import WeatherScreen from '../../components/WeatherScreen';
import { useWeatherData } from '../../hooks/useWeatherData';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import { themedStyles } from '../../utils/themedStyles';

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  const { weatherData, loading, error, fetchWeather } = useWeatherData();
  const { isDarkMode, toggle } = useThemeToggle();
  const dynamic = themedStyles(isDarkMode);

  const handleFetchWeather = useCallback(() => {
    if (city.trim()) {
      fetchWeather(city);
    } else {
      Alert.alert('Please enter a city');
    }
  }, [city, fetchWeather]);

  return (
    <View style={[baseStyles.container, dynamic.container]}>
      <View style={[baseStyles.toolbar, dynamic.toolbarBg]}>
        <Text style={[baseStyles.toolbarTitle, dynamic.toolbarText]}>Weather App</Text>
        <TouchableOpacity style={baseStyles.toggleButton} onPress={toggle}>
          <Text style={baseStyles.toggleText}>{isDarkMode ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
      </View>

      <GenericTextInput
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
        style={[dynamic.textColor, dynamic.inputBorder]}
        placeholderTextColor={dynamic.placeholderText}
      />

      <GenericButton title="Get Weather" onPress={handleFetchWeather} />

      {loading && <ActivityIndicator size="large" color="#6200EE" />}

      {error && (
        <View style={baseStyles.errorContainer}>
          <Text style={[baseStyles.error, dynamic.errorText]}>{error}</Text>
        </View>
      )}

      {weatherData && <WeatherScreen weatherData={weatherData} />}
    </View>
  );
};

export default HomeScreen;
