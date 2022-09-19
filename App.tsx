import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import React from 'react';

let App = () => {
  return (
    <View style={styles.app}>
      <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 40,
  },
});

export default App;
