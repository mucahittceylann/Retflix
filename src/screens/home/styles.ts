import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerTitle: {
    bottom: 4,
    fontSize: distances.wider,
    color: colors.gray,
    left: distances.default,
    margin: 5,
  },
  popularStyle: {
    width: 160,
    height: 220,
    marginHorizontal: 10,
  },
  listStyle: {
    width: 120,
    height: 160,
    marginHorizontal: 10,
  },
});

export default styles;
