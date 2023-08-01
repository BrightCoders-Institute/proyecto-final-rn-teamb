import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

interface AccountActionButtonProps {
  title: String;
  onPress: () => void;
}

export const AccountActionButton: React.FC<AccountActionButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
