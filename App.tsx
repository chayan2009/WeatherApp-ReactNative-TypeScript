import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/screens/navigation/AppNavigator';
import WeatherProvider from './src/context/WeatherProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WeatherProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </WeatherProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
