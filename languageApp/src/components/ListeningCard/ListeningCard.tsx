import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ListeningCardProps {
  Name: String;
  Author: String;
}

export const ListeningCard: React.FC<ListeningCardProps> = ({Name, Author}) => {
  return (
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
        <Text style={styles.textName}>{Name}</Text>
        <Text style={styles.textAuthor}>{Author}</Text>
      </View>
      <Icon style={styles.icon} name="spotify" size={30} color="#5FCDD9" />
    </View>
  );
};
