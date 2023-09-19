import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  storyContainer: {
    width: screenWidth,
    height: screenHeight * 0.6,
    backgroundColor: '#EFF0EF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  author: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#04BFAD',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  story: {
    alignSelf: 'center',
    width: screenWidth * 0.8,
    color: '#012030',
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginBottom: 80,
  },
});
export default styles;
