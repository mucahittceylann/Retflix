import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';
import {width} from '../../utils/metrics';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  contentContainer: {paddingBottom: distances.half},
  listStyle: {
    width: 125,
    height: 220,
    padding: distances.half,
  },
  mostPopularView: {
    flexDirection: 'row',
    width: width,
    height: 260,
  },
  mostPopularImage: {width: 190, aspectRatio: 0.7},
  homeView: {
    marginTop: 90,
  },
});

export default styles;
