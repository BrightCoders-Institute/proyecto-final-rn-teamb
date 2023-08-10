import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      loginTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0D2038',
        marginBottom: 30,
      },
      image: {
        width: 300, 
        height: 250, 
        marginBottom: 40,
      },
      registerContainer: {
        position: 'relative',
        bottom: -50,
      },
      registerText: {
        fontSize: 16,
        color: '#0D2038',
      },
      registerClick: {
        fontSize: 16,
        color: '#0D2038',
        fontWeight: 'bold',
      },
});
export default styles;
