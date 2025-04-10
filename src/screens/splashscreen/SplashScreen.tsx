import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './SplashScreen.styles';

const SplashScreen = () => {
  return (
    <View style={style.container}>
      <Image
        testID="image"
        source={require('../../asset/cloudy.png')}
        style={style.logo}
        resizeMode="contain"
      />
      <Text style={style.text}>Welcome to Weather App</Text>
    </View>
  );
};
export default SplashScreen;
