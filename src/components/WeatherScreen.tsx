import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import WeatherCard from './WeatherCard';
import WeatherData from '../types/weatherData';
import { UNITS } from '../utils/units';

interface Props {
  weatherData: WeatherData;
}

const WeatherScreen: React.FC<Props> = ({ weatherData }) => {
  const { main, wind, sys } = weatherData;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WeatherCard data={weatherData} />
      <View style={styles.infoRow}>
        <WeatherCard title="Feels Like" value={`${main.feels_like}${UNITS.CELSIUS}`} />
        <WeatherCard title="Humidity" value={`${main.humidity}${UNITS.PERCENT}`} />
      </View>

      <View style={styles.infoRow}>
        <WeatherCard title="Min Temp" value={`${main.temp_min}${UNITS.CELSIUS}`} />
        <WeatherCard title="Max Temp" value={`${main.temp_max}${UNITS.CELSIUS}`} />
      </View>

      <View style={styles.infoRow}>
        <WeatherCard title="Pressure" value={`${main.pressure} ${UNITS.PRESSURE}`} />
        <WeatherCard title="Wind Speed" value={`${wind.speed} ${UNITS.WIND_SPEED}`} />
      </View>

      <View style={styles.infoRow}>
        <WeatherCard title="Sunrise" value={new Date(sys.sunrise * 1000).toLocaleTimeString()} />
        <WeatherCard title="Sunset" value={new Date(sys.sunset * 1000).toLocaleTimeString()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingBottom: 100,
  },
  infoRow: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default WeatherScreen;
