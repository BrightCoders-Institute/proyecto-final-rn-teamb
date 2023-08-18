import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface FormPorps {
  isRegister?: boolean;
  buttonLabel: string;
}

export const Form = ({isRegister = false, buttonLabel}: FormPorps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    // Implement your login logic here
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.formContainer}>
      {isRegister && (
        <View>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name Example"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
      )}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.passwordToggle}
          onPress={toggleShowPassword}>
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={20}
            color="#777"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};
