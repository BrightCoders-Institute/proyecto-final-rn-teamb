import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PodcastEpisode} from '../../interfaces/CardsInterfaces';

interface PodcastCardProps {
  podcast: PodcastEpisode;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({podcast}) => {
  console.log(podcast);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Button pressed');
        Linking.openURL(podcast.external_urls.spotify).catch(err =>
          console.error('Error opening URL: ', err),
        );
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: podcast.images[0].url}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{podcast.name}</Text>
          <Text style={styles.textAuthor}>{podcast.publisher}</Text>
        </View>
        <Icon style={styles.icon} name="spotify" size={30} color="#5FCDD9" />
      </View>
    </TouchableOpacity>
  );
};
