import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      {/* We use Flat for optimization instead of map */}
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        keyExtractor={item => `post-${item.createdAt}`}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 40,
  },
});

export default App;
