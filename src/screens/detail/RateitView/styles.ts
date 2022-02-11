import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import distances from '../../../utils/distances';

const styles = StyleSheet.create({
  whiteText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.red,
  },
  rowView: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: distances.wider,
    marginTop: -distances.half,
  },
  iconView: {
    alignItems: 'center',
  },
  iconView2: {
    alignItems: 'center',
    marginLeft: distances.mega,
  },
});

export default styles;
