import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ToReadCardProps {
  title?: string;
  author?: string;
  moral?: string;
  onPress?: () => void;
  read?: boolean;
}

export const ToReadCard: React.FC<ToReadCardProps> = ({
  title,
  author,
  moral,
  onPress,
  read,
}) => {
  const [markRead, setMarkRead] = useState(read);

  const handleMarkRead = () => {
    read = !markRead;
    setMarkRead(!markRead);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
          <TouchableOpacity onPress={handleMarkRead}>
            <Icon
              name={markRead ? 'eye' : 'eye-outline'}
              size={25}
              color="#04BFAD"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.moralContainer}>
          <Text style={styles.moral}>{moral}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
