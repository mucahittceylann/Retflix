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
  dbButton: {
    width: '70%',
    marginTop: distances.default,
    backgroundColor: colors.red,
    height: 40,
    borderRadius: distances.half,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 18,
    fontWeight: '700',
  },
  detailImage: {
    width: 350,
    height: 330,
    borderRadius: 6,
  },
  whiteText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
  },
});

export default styles;
