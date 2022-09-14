import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    colors: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
