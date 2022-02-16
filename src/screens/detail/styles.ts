import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  rowSimilar: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    margin: distances.wider,
  },
  overviewTitle: {
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    marginTop: distances.default,
  },
  iceBoldTitle: {
    marginTop: distances.default,
    color: colors.ice,
    fontSize: 20,
    fontWeight: '600',
  },
  detailImage: {
    height: 330,
    aspectRatio: 0.7,
    borderRadius: 6,
  },
  whiteText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
    marginLeft: 10,
  },
  similarView: {
    marginTop: -distances.default,
    margin: distances.default,
    marginBottom: distances.default,
  },
  iconsView: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: distances.half,
  },
  similarMovies: {
    height: 150,
    width: 125,
    padding: distances.half,
    marginBottom: distances.mega,
  },
});

export default styles;
