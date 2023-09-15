import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  headerContainer: {
    width: wp("93%"),
    height: hp("12%"),
    backgroundColor: '#5FCDD9',
    borderRadius: 6,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  flashCardText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#012030',
    textAlign: 'center',
  },
  statesContainer: {
    marginTop: hp("5%"),
  },
  container: {
    width: wp("90%"),
    height: hp("12%"),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  noCard: {
    flexDirection: 'column',
  },
  noYetCard: {
    flexDirection: 'column',
  },
  yesCard: {
    flexDirection: 'column',
  },
  text: {
    color: '#012030',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 5,
  },
});
export default styles;
