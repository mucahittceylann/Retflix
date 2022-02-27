import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  avatarImage: {
    width: 170,
    height: 165,
    borderRadius: 100,
    marginTop: distances.default,
    marginBottom: distances.double,
  },
  emailText: {
    fontSize: 16,
    color: colors.white,
  },
  SettingsView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 100,
  },
});

export default styles;
