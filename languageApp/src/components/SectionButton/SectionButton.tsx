import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

interface SectionButtonProps {
  title: string;
  onPress: () => void;
}

export const SectionButton: React.FC<SectionButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sectionButton} onPress={() => {}}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
