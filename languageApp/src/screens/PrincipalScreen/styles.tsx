import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    color: '#027373',
    fontWeight: '600',
  },
  description: {
    fontSize: 20,
    color: '#000000',
  },
  signUpButton: {
    backgroundColor: '#5FCDD9',
    height: 90,
    width: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: -5,
  },
  signUpTitle: {
    fontSize: 25,
    color: '#0D2038',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#012030',
    height: 90,
    width: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: -5,
  },
  loginTitle: {
    fontSize: 25,
    color: '#5FCDD9',
    fontWeight: '600',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export default styles;
