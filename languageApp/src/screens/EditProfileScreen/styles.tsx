import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editProfileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Center the title horizontally
    marginBottom: 20,
  },
  pfpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  pfpBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#04BFAD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  pfpLabels: {
    marginLeft: 20,
  },
  pfpLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  pfpLabelText: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
    padding: 12,
    width: wp('80%'),
    height: hp('7%'),
    backgroundColor: '#0D2038',
    borderRadius: 6,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
  errorText: {
    marginTop: 0,
    fontSize: 15,
    color: '#ff0d10',
    marginLeft: 12,
  },
});

export default styles;
