import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  whiteBoldText: {
    fontSize: 26,
    alignSelf: 'center',
    fontWeight: '600',
    color: colors.red,
    margin: distances.half,
  },
  image: {
    padding: distances.half,
  },
});

export default styles;
