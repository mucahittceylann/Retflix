import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
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
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
  },
  listStyle: {
    width: 120,
    height: 160,
    marginHorizontal: distances.half,
  },
  similarView: {
    marginTop: -distances.default,
    margin: distances.default,
    marginBottom: distances.default,
  },
  iconsView: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: distances.wider,
    marginTop: -distances.half,
  },
});

export default styles;
