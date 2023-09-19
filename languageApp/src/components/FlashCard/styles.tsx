import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('15%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  face: {
    backgroundColor: '#012030',
    width: wp('90%'),
    height: hp('16%'),
    borderRadius: 6,
    justifyContent: 'center',
  },
  faceText: {
    color: '#5FCDD9',
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    textAlign: 'center',
  },
  back: {
    backgroundColor: '#5FCDD9',
    width: wp('90%'),
    height: hp('16%'),
    borderRadius: 6,
    justifyContent: 'center',
  },
  backText: {
    color: '#012030',
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  icon: {
    color: 'grey',
    left: wp('38%'),
  },
});
export default styles;
