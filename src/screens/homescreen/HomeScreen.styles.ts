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
    flexDirection:'row',
    backgroundColor: '#1976D2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  toolbarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  toggleText: {
    fontSize: 12,
    color: '#1976D2',
    fontWeight: 'bold',
  },
});
export default homeStyle;
