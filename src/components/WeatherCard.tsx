import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import WeatherData from '../types/weatherData';

type WeatherCardProps =
  | { data: WeatherData; title?: never; value?: never }
  | { title: string; value: string; data?: never };

const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  if (props.data) {
    const { name, main, weather, sys } = props.data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
      <View style={styles.card}>
        <Text style={styles.city}>{name}, {sys.country}</Text>
        <Image source={{ uri: iconUrl }} style={styles.icon} />
        <Text style={styles.temp}>{main.temp}°C</Text>
        <Text style={styles.description}>{weather[0].description}</Text>
      </View>
    );
  }

  if (props.title && props.value) {
    return (
      <View style={styles.infoCard}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
  icon: {
    width: 80,
    height: 80,
    marginVertical: 8,
  },
  temp: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004d40',
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
  },
  infoCard: {
    width: '47%',
    backgroundColor: '#f1f8e9',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33691E',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginTop: 4,
  },
});

export default WeatherCard;
