import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../splashscreen/SplashScreen';
import HomeScreen from '../homescreen/HomeScreen';

const stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <stack.Screen name="Splash" component={SplashScreen} />
      <stack.Screen name="Home" component={HomeScreen}/>
    </stack.Navigator>
  );
};
export default AppNavigator;
