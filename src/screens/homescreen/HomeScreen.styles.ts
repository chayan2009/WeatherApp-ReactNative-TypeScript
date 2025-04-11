import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginTop: 10,
    alignItems:'center',
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  toolbar: {
    backgroundColor: '#1976D2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  toolbarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default homeStyle;
