import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface WordCardProps {
  word: string;
  definition: string | string[];
}

export const WordCard: React.FC<WordCardProps> = ({word, definition}) => {
  const [currentDefinitionIndex, setCurrentDefinitionIndex] =
    useState<number>(0);

  const handleNextDefinitionClick = () => {
    if (Array.isArray(definition) && definition.length > 1) {
      setCurrentDefinitionIndex(prevIndex =>
        prevIndex < definition.length - 1 ? prevIndex + 1 : 0,
      );
    }
  };

  const meanings = Array.isArray(definition) ? definition : [definition];

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text>
      <View style={styles.definitionContainer}>
        <Text style={styles.definition}>
          {meanings[currentDefinitionIndex]}
        </Text>
        <TouchableOpacity onPress={handleNextDefinitionClick}>
          <Icon
            style={styles.nextIcon}
            name={'chevron-right'}
            size={40}
            color="#5FCDD9"
          />
        </TouchableOpacity>
      </View>
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
