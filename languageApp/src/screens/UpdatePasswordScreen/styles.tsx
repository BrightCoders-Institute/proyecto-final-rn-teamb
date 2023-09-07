import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#5FCDD9',
        borderRadius: 8,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    changePasswordText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    changePasswordButton: {
        backgroundColor: '#5FCDD9',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    changePasswordButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
