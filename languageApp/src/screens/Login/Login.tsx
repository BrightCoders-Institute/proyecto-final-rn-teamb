import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Log In</Text>
      
      {/* Add the image after the title */}
      <Image
        source={{
          uri: 'https://elements-cover-images-0.imgix.net/ffc84ba8-0528-43f3-961a-536767fcebf2?auto=compress%2Cformat&fit=max&w=1019&s=8cf6c5c600c005bc8d7af25d4d6055d6',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.passwordToggle} onPress={toggleShowPassword}>
            <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#777" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerClick}>Register</Text> </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
    height: 200, 
    marginBottom: 20,
  },
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
  },
  registerContainer: {
    position: 'absolute',
    bottom: 20,
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

export default Login;
