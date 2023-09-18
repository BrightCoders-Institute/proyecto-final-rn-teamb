import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Track } from '../../interfaces/CardsInterfaces';

interface ListeningCardProps {
  song: Track;
  onPress?: () => void;
}

export const ListeningCard: React.FC<ListeningCardProps> = ({
  song,
  onPress,
}) => {
  console.log(song)

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: song.album.images[0].url}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{song.name}</Text>
          <Text style={styles.textAuthor}>{song.artists[0].name}</Text>
        </View>
        <Icon style={styles.icon} name="spotify" size={30} color="#5FCDD9" />
      </View>
    </TouchableOpacity>
  );
};
