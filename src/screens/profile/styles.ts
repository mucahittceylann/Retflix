import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  avatarImage: {
    width: 170,
    height: 155,
    borderRadius: 100,
    marginTop: distances.default,
    marginBottom: distances.double,
  },
  whiteTextBold: {
    fontSize: 24,
    color: colors.white,
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    marginTop: distances.default,
  },
  logOutView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  redText: {
    fontSize: 16,
    color: colors.red,
  },
});

export default styles;
