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
    width: 140,
    height: 220,
    padding: distances.half,
  },
  popularMovieImage: {
    padding: distances.half,
  },
  mostPopularView: {
    width: width,
    alignItems: 'center',
    height: 260,
    marginLeft: distances.default,
  },
  mostPopularText: {
    fontWeight: '600',
    fontStyle: 'italic',
    alignSelf: 'center',
    color: colors.white,
    fontSize: 22,
    marginBottom: distances.default,
  },
  mostPopularImage: {width: 190, aspectRatio: 0.7},
  homeView: {
    marginTop: distances.default,
  },
});

export default styles;
