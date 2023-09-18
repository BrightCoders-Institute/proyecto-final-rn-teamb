import React, { useState } from 'react';
import {View, Text} from 'react-native';
import FlipCard from 'react-native-flip-card';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FlashCardProps {
  faceText: string;
  backText: string;
}

export const FlashCard: React.FC<FlashCardProps> = ({faceText, backText}) => {
  const [flip, setFlip] = useState(false)
  return (
    <View style={styles.container}>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={flip}
        clickable={true}>
        <View style={styles.face}>
          <Text style={styles.faceText}>{faceText}</Text>
        </View>

        <View style={styles.back}>
          <Text style={styles.backText}>{backText}</Text>
        </View>
      </FlipCard>
      
      <Icon name='sync' size={40} style={styles.icon} onPress={() => setFlip(!flip)}/>
    </View>
  );
};
