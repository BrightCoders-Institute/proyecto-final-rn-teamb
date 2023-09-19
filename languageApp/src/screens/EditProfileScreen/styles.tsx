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
    color: '#012030',
    fontFamily: 'Roboto-Regular',
  },
  pfpLabelText: {
    fontSize: 16,
  },
});

export default styles;
