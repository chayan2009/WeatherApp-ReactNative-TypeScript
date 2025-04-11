import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator';
import WeatherProvider from './src/context/WeatherProvider';
const App = () => {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WeatherProvider>
  );
};

export default App;
