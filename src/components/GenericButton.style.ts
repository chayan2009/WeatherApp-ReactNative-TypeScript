import { StyleSheet } from 'react-native';
import { Colorss } from '../utils/Colorss';

const buttonstyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: Colorss.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: Colorss.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colorss.primary,
  },
  disabled: {
    backgroundColor: Colorss.disabled,
    borderColor: Colorss.disabled,
    opacity: 0.6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default buttonstyles;
