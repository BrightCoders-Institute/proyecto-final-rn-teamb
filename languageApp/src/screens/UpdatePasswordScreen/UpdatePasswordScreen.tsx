import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles'

export const UpdatePasswordScreen: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmNewPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      const user = auth().currentUser;

      if (!user) {
        Alert.alert('User not found');
        return;
      }

      // Prompt the user for their current password
      const currentPass = currentPassword;

      // Reauthenticate the user with their current password
      const emailCred = auth.EmailAuthProvider.credential(user.email || '', currentPass);
      await user.reauthenticateWithCredential(emailCred);

      // Update the user's password with the new one
      await user.updatePassword(newPassword);

      Alert.alert('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      Alert.alert('Error updating password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <Text style={styles.subtitle}>Enter your current and new password below:</Text>

      <Text style={styles.label}>Current Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={text => setCurrentPassword(text)}
      />

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />

      <Text style={styles.label}>Confirm New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={text => setConfirmNewPassword(text)}
      />

      <TouchableOpacity
        style={styles.changePasswordButton}
        onPress={handleChangePassword}>
        <Text style={styles.changePasswordButtonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePasswordScreen;
