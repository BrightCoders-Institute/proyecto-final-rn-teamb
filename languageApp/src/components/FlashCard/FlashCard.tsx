import React from 'react';
import {View, Text} from 'react-native';
import FlipCard from 'react-native-flip-card';
import styles from './styles';

interface FlashCardProps {
  faceText: string;
  backText: string;
}

export const FlashCard: React.FC<FlashCardProps> = ({faceText, backText}) => {
  return (
    <View style={styles.container}>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}>
        <View style={styles.face}>
          <Text style={styles.faceText}>{faceText}</Text>
        </View>

        <View style={styles.back}>
          <Text style={styles.backText}>{backText}</Text>
        </View>
      </FlipCard>
    </View>
  );
};
