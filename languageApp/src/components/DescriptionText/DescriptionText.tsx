import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface DescriptionTextProps {
  description: string;
}

export const DescriptionText: React.FC<DescriptionTextProps> = ({
  description,
}) => {
  return (
    <View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
