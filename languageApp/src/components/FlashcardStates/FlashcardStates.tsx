import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
//icons
import YesIcon from '../Icon/YesIcon';
import NoIcon from '../Icon/NoIcon';
import NoYetIcon from '../Icon/NoYetIcon';

export const FlashcardStates = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noCard}>
        <TouchableOpacity onPress={() => {}}>
          <NoIcon />
          <Text style={styles.text}>No</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.noYetCard}>
        <TouchableOpacity onPress={() => {}}>
          <NoYetIcon />
          <Text style={styles.text}>No Yet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.yesCard}>
        <TouchableOpacity onPress={() => {}}>
          <YesIcon />
          <Text style={styles.text}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
