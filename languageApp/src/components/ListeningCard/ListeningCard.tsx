import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ListeningCardProps {
  name: String;
  author: String;
}

export const ListeningCard: React.FC<ListeningCardProps> = ({name, author}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://wrvu.org/wp-content/uploads/2020/10/113593586_swift.jpg ',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textAuthor}>{author}</Text>
        </View>
        <Icon style={styles.icon} name="spotify" size={30} color="#5FCDD9" />
      </View>
    </TouchableOpacity>
  );
};
