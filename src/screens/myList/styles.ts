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
    fontSize: 22,
    color: colors.white,
    margin: distances.half,
  },
});

export default styles;
