import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface WordCardProps {
  word: string;
  definition: string;
}

export const WordCard: React.FC<WordCardProps> = ({word, definition}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.definition}>{definition}</Text>
      <TouchableOpacity>
        <Icon
          style={styles.icon}
          name={'volume-high'}
          size={40}
          color="#5FCDD9"
        />
      </TouchableOpacity>
    </View>
  );
};
