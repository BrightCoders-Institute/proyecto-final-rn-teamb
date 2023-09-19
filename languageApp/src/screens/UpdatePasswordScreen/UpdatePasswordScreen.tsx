import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import {NavigationProp} from '@react-navigation/native';

interface NavigateProps {
  navigation: NavigationProp<any>;
}

export const UpdatePasswordScreen: React.FC<NavigateProps> = ({navigation}) => {
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

      const currentPass = currentPassword;

      const emailCred = auth.EmailAuthProvider.credential(
        user.email || '',
        currentPass,
      );
      await user.reauthenticateWithCredential(emailCred);

      await user.updatePassword(newPassword);

      Snackbar.show({
        text: 'Password updated successfully',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: '#5FCDD9',
          onPress: () => {
            navigation.navigate('EditProfile');
          },
        },
      });
    } catch (error) {
      console.error('Error updating password:', error);

      Snackbar.show({
        text: 'Error updating password. Please try again.',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'OK',
          textColor: '#7C0000',
          onPress: () => {
            navigation.navigate('EditProfile');
          },
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <Text style={styles.subtitle}>
        Enter your current and new password below:
      </Text>

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
