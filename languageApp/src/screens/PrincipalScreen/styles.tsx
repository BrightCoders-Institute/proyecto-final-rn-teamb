import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    marginTop: 15,
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 72,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  signUpButton: {
    backgroundColor: '#5FCDD9',
    height: 58,
    width: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: -5,
  },
  signUpTitle: {
    color: '#0D2038',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  loginButton: {
    backgroundColor: '#012030',
    height: 58,
    width: 190,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: -5,
  },
  loginTitle: {
    color: '#5FCDD9',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
});
export default styles;
