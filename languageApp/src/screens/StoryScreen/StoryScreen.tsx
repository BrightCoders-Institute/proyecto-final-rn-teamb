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
  const [markRead, setMarkRead] = useState(false);

  const handleMarkRead = () => {
    setMarkRead(!markRead);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upPartContainer}>
        <ReadingImage />
      </View>
      <View style={styles.storyContainer}>
        <ScrollView>
          <HeaderText header={title} />
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.story}>{story}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
