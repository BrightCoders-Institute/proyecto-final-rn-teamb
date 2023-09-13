import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: 335,
    height: 82,
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
    marginTop: 134,
  },
  container: {
    width: 336,
    height: 120,
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
