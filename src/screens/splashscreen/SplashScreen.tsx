import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import style from './SplashScreen.styles';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParameterList } from '../navigation/types';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParameterList>>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

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
