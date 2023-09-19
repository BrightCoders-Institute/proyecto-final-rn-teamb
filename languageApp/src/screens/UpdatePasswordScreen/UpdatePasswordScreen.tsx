import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationProp} from '@react-navigation/native';
//components
import styles from './styles';
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {DescriptionText} from '../../components/DescriptionText/DescriptionText';
import {BlueButton} from '../../components/BlueButton/BlueButton';
import Snackbar from 'react-native-snackbar';

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
        backgroundColor: '#012030',
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
        backgroundColor: '#012030',
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
      <HeaderText header="Change Password" />

      <DescriptionText description="Current Password" />
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={text => setCurrentPassword(text)}
      />

      <DescriptionText description="New Password" />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />

      <DescriptionText description="Confirm New Password" />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry={true}
        value={confirmNewPassword}
        onChangeText={text => setConfirmNewPassword(text)}
      />

      <BlueButton title="Change Password" onPress={handleChangePassword} />
    </View>
  );
};

export default UpdatePasswordScreen;
