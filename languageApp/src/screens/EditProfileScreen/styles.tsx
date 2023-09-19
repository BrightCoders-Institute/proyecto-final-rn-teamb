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
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#012030',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  email: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#012030',
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#012030',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default styles;
