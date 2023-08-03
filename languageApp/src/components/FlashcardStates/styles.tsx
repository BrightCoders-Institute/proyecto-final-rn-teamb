import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 336,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
