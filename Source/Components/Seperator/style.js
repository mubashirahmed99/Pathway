import { StyleSheet } from 'react-native';
import { scalableheight } from '../../Utilities/ResponsiveSheet';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: scalableheight.borderTopWidth,
    backgroundColor: '#707070',
    opacity: 0.3,
    marginVertical: scalableheight.onepointfive,

  },
});
