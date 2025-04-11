import {StyleSheet} from 'react-native';
import { Colorss } from '../utils/Colorss';

const buttonstyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    marginVertical: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: Colorss.primary,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor:  Colorss.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
export default buttonstyles;
