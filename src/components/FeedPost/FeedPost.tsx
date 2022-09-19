import {
  View,
  Text,
  StyleSheet,
  Image,
  TextStyle,
  Pressable,
} from 'react-native';
import colors from '../../theme/colors';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import React from 'react';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}
const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpanded, set_isDescriptionexpanded] =
    React.useState(false);
  const [isLiked, set_isLiked] = React.useState(false);

  const toggleDescriptionExpanded = () => {
    set_isDescriptionexpanded(v => !v); // use this to update on the previous value
  };

  const toggleLike = () => {
    set_isLiked(v => !v);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image style={styles.image} source={{uri: post.image}} />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} />;
  } else if (post.video) {
    content = <VideoPlayer uri={post.video} paused={!isVisible} />;
  }

  return (
    <View style={styles.post}>
      {/* Post Header */}
      <View style={styles.header}>
        <Image
          source={{
            // uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Post Content */}
      {content}

      {/* Post Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Post Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>reactNative</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Post Description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text style={{color: 'grey'}} onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Post Comments */}
        <Text style={{color: 'grey'}}>View All {post.nofComments}</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/*Posted Date */}
        <Text style={{color: 'grey'}}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
