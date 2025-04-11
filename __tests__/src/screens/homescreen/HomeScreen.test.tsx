import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../../../../src/screens/homescreen/HomeScreen';
import * as weatherService from '../../../../src/services/weatherService';
const mockWeatherData = {
  name: 'Dubai',
  sys: { country: 'AE' },
  main: { temp: 35 },
  weather: [{ description: 'clear sky' }],
} as const;

jest.spyOn(weatherService, 'fetchWeatherByCity').mockImplementation(async (city) => {
  if (city === 'Dubai') {return mockWeatherData as any;}
  throw new Error('City not found');
});

describe('HomeScreen', () => {
  it('displays weather data for a valid city', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(<HomeScreen />);
    const input = getByPlaceholderText('Enter city name');
    const button = getByText('Get Weather');

    fireEvent.changeText(input, 'Dubai');
    fireEvent.press(button);

    expect(await findByText('Dubai, AE')).toBeTruthy();
    expect(await findByText('35°C')).toBeTruthy();
    expect(await findByText('clear sky')).toBeTruthy();
  });

  it('displays error message for invalid city', async () => {
    const {getByPlaceholderText, getByText, findByText} = render(<HomeScreen />);
    const input = getByPlaceholderText('Enter city name');
    const button = getByText('Get Weather');

    fireEvent.changeText(input, 'InvalidCity');
    fireEvent.press(button);

    expect(await findByText('City not found. Please try again!!!!!')).toBeTruthy();
  });
});