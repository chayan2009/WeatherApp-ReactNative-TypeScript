import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import style from './SplashScreen.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SPLASH_SCREEN_TIMEOUT } from '../../utils/constants';
import { RootStackParamList } from '../navigation/navigation';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, SPLASH_SCREEN_TIMEOUT);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={style.safeArea}>
    <View style={style.container}>
      <Image
        testID="image"
        source={require('../../asset/cloudy.png')}
        style={style.logo}
        resizeMode="contain"
      />
      <Text style={style.text}>Welcome to Weather App</Text>
    </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
