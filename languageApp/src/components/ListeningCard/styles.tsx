import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 329,
    height: 80,
    backgroundColor: '#012030',
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 66,
    borderRadius: 6,
    marginRight: 15,
    marginLeft: 7,
  },
  textContainer: {
    width: 180,
    flexDirection: 'column',
    marginTop: 17,
  },
  textName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    textAlign: 'justify',
  },
  textAuthor: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
  },
  icon: {
    margin: 10,
    alignSelf: 'center',
  },
});
export default styles;
