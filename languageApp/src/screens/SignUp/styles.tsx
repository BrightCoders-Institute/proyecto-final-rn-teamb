import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D2038',
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 250,
    marginBottom: 40,
  },
  image_reduced: {
    width: 200,
    height: 150,
    marginBottom: 40,
  },
  registerContainer: {
    position: 'relative',
    bottom: -30,
  },
  registerText: {
    fontSize: 16,
    color: '#0D2038',
  },
  registerClick: {
    fontSize: 16,
    color: '#0D2038',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1, // Expand the password field all the way
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#0D2038',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D2038',
  },
  errorText: {
    marginTop: 0,
    fontSize: 15,
    color: '#ff0d10',
    marginLeft: 12,
  },
});
export default styles;
