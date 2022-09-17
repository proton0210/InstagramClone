import {View, FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      keyExtractor={item => `post-${item.createdAt}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
