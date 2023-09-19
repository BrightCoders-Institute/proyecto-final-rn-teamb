import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import ReadingImage from '../../components/Icon/ReadingImage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StoryProps {
  route: {
    params: {
      story: string;
      author: string;
      title: string;
    };
  };
  read?: boolean;
}

export const StoryScreen: React.FC<StoryProps> = ({route}) => {
  const {story, author, title} = route.params;

  return (
    <View style={styles.container}>
        <ReadingImage />
      <View style={styles.storyContainer}>
        <ScrollView style={{marginBottom:80}}>
          <HeaderText header={title} />
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.story}>{story}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
