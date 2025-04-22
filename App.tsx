import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator';
import WeatherProvider from './src/context/WeatherProvider';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <WeatherProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </WeatherProvider>
    </Provider>
  );
};

export default App;
