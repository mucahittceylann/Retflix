import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  contentContainer: {paddingBottom: distances.default},
  listStyle: {
    width: 120,
    height: 160,
    marginHorizontal: distances.half,
  },
});

export default styles;
