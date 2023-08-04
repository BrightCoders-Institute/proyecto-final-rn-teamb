import React from 'react';
import { View, StyleSheet } from 'react-native';
import EditProfile from './src/screens/EditProfile/EditProfile';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <EditProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
