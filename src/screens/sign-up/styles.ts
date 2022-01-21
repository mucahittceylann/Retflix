import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import distances from '../../utils/distances';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  inputView: {
    width: '85%',
    height: 40,
    backgroundColor: colors.white,
    borderRadius: distances.half,
    marginTop: distances.half,
  },
  dbButton: {
    width: '70%',
    marginTop: distances.half,
    backgroundColor: colors.red,
    height: distances.double,
    borderRadius: distances.half,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signButtonTitle: {
    color: colors.white,
    fontSize: distances.default,
    fontWeight: 'bold',
    bottom: 2,
  },
  rLogo: {
    width: 300,
    height: 200,
    marginTop: 100,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
  iceBoldText: {
    marginTop: distances.default,
    color: colors.ice,
    fontSize: distances.default,
    fontWeight: 'bold',
  },
});

export default styles;
