import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
<<<<<<< HEAD
=======
import distances from '../../utils/distances';
>>>>>>> 211ef7b57fc5649d731b4152b0940bffb1cb86a4

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
  dbButtonText: {
    color: colors.white,
    fontSize: distances.default,
    fontWeight: '500',
    bottom: 2,
  },
  rLogo: {
    width: 300,
    height: 200,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default styles;
