import {View, Text, StyleSheet, Image, TextStyle} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Post Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>0210vidit</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Post Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Post Footer */}
      <View style={styles.iconContainer}>
        <AntDesign
          name={'hearto'}
          size={24}
          style={styles.icon}
          color={colors.black}
        />
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

      <Text style={styles.likes}>Liked by 0210vidit and 100 others</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default App;
