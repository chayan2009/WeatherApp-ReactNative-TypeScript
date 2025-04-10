import React from 'react';
import {render} from '@testing-library/react-native';
import SplashScreen from '../../../../src/screens/splashscreen/SplashScreen';

describe('SplashScreen' ,()=>{

    it('should render welcome text',()=>{
       const {getByText} = render(<SplashScreen/>);
       expect(getByText('Welcome to Weather App')).toBeTruthy();
    });
    it('should render image',()=>{
       const {getByTestId} = render(<SplashScreen/>);
       expect(getByTestId('image')).toBeTruthy();
    });
});
