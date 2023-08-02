import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 114,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  face: {
    backgroundColor: '#012030',
    width: 335,
    height: 114,
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
    width: 335,
    height: 114,
    borderRadius: 6,
    justifyContent: 'center',
  },
  backText: {
    color: '#012030',
    fontFamily: 'Roboto-Bold',
    fontSize: 32,
    textAlign: 'center',
  },
});
export default styles;
