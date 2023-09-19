import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    width: wp("80%"),
    height: hp("7%"),
    backgroundColor: '#012030',
    borderRadius: 6,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
});
export default styles;
