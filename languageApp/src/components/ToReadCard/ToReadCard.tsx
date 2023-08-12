import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ToReadCardProps {
  title: String;
  author: String;
  moral: String;
}

export const ToReadCard: React.FC<ToReadCardProps> = ({
  title,
  author,
  moral,
}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
          <Icon
            style={styles.icon}
            name="heart-circle"
            size={30}
            color="#04BFAD"
          />
        </View>

        <View style={styles.moralContainer}>
          <Text style={styles.moral}>{moral}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
