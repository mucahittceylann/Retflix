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
  },
  overviewTitle: {
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    padding: distances.wider,
    marginTop: distances.default,
  },
  iceBoldTitle: {
    marginTop: distances.default,
    color: colors.ice,
    fontSize: 20,
    fontWeight: '600',
  },
  detailImage: {
    marginTop: distances.half,
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
    marginVertical: distances.default,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconsView: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: distances.half,
  },
  similarMovies: {
    height: 150,
    width: '33%',
    padding: distances.half,
    marginBottom: distances.mega,
  },
  activeCategory: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '600',
  },
  inactiveCategory: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
