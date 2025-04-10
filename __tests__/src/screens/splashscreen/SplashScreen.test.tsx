import React, { act } from 'react';
import {render} from '@testing-library/react-native';
import SplashScreen from '../../../../src/screens/splashscreen/SplashScreen';

//Mock Navigation
const mocknavigation = jest.fn();

jest.mock('@react-navigation/native',()=>{

    return {
        useNavigation:()=>({
          navigate:mocknavigation,
        }),
    };
});

describe('SplashScreen' ,()=>{

    it('should render welcome text',()=>{
       const {getByText} = render(<SplashScreen/>);
       expect(getByText('Welcome to Weather App')).toBeTruthy();
    });
    it('should render image',()=>{
       const {getByTestId} = render(<SplashScreen/>);
       expect(getByTestId('image')).toBeTruthy();
    });
    it('should Navigate Home After 3 seconds',()=>{
      render(<SplashScreen/>);
      act(()=>{
      jest.advanceTimersByTime(3000);
      });
    });
});
