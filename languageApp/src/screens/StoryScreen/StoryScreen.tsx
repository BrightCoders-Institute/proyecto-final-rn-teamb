import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import ReadingImage from '../../components/Icon/ReadingImage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface StoryProps {
  title?: String;
  author?: String;
}

export const StoryScreen: React.FC<StoryProps> = ({title, author}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upPartContainer}>
        <ReadingImage />
        <TouchableOpacity style={styles.favoritesButton}>
          <Icon name="heart-circle" size={40} color="#04BFAD" />
        </TouchableOpacity>
      </View>
      <View style={styles.storyContainer}>
        <ScrollView>
          <HeaderText header={"The Wolf in Sheep's Clothing"} />
          <Text style={styles.author}>Aesop's Fables</Text>
          <Text style={styles.story}>
            A certain Wolf could not get enough to eat because of the
            watchfulness of the Shepherds. But one night he found a sheep skin
            that had been cast aside and forgotten. The next day, dressed in the
            skin, the Wolf strolled into the pasture with the Sheep. Soon a
            little Lamb was following him about and was quickly led away to
            slaughter. That evening the Wolf entered the fold with the flock.
            But it happened that the Shepherd took a fancy for mutton broth that
            very evening, and, picking up a knife, went to the fold. There the
            first he laid hands on and killed was the Wolf.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
