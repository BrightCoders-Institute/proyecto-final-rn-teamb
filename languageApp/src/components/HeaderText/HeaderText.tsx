import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface HeaderTextProps {
  header?: String;
}

export const HeaderText: React.FC<HeaderTextProps> = ({header}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
    </View>
  );
};
