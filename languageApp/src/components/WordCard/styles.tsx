import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#012030',
    width: screenWidth * 0.8,
    borderRadius: 6,
    marginTop: 30,
  },
  word: {
    color: '#5FCDD9',
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  definitionContainer: {
    width: screenWidth * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  definition: {
    color: '#04BFAD',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 10,
    width: screenWidth * 0.6,
  },
  nextIcon: {
    right: 5,
  },
});
export default styles;
