import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../splashscreen/SplashScreen';

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <stack.Screen name="Splash" component={SplashScreen} />
    </stack.Navigator>
  );
};
export default AppNavigator;
