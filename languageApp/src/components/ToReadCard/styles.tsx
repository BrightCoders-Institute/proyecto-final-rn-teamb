import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 329,
    backgroundColor: '#EFF0EF',
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 10,
    shadowColor: '#EFF0EF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: 180,
    flexDirection: 'column',
    marginTop: 17,
    marginLeft: 17,
    marginBottom: 10,
  },
  title: {
    color: '#012030',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    textAlign: 'justify',
    marginBottom: 3,
  },
  author: {
    color: '#04BFAD',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    textAlign: 'justify',
  },
  moralContainer: {
    marginRight: 17,
    marginLeft: 17,
    marginBottom: 17,
  },
  moral: {
    color: '#012030',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
  },
  icon: {
    margin: 10,
    alignSelf: 'flex-start',
  },
});
export default styles;
