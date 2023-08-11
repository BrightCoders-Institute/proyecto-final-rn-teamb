import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
      formContainer: {
        width: '100%',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      passwordInput: {
        flex: 1, // Expand the password field all the way
      },
      passwordToggle: {
        position: 'absolute',
        right: 10,
        padding: 5,
      },
      loginButton: {
        backgroundColor: '#0D2038',
        padding: 12,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0D2038',
      }
});
export default styles;
