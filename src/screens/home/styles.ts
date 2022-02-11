import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';
import {width} from '../../utils/metrics';

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
  popularView: {
    width: width,
    height: 260,
  },
  newText: {
    fontSize: 24,
    color: colors.white,
    fontStyle: 'italic',
    marginLeft: distances.default,
    margin: distances.half,
  },
  latestImage: {
    width: width,
  },
});

export default styles;
