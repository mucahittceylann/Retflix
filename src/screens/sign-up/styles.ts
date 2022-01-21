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
    backgroundColor: colors.gray,
    borderRadius: distances.half,
    marginTop: distances.half,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    width: '100%',
    flex: 1,
    paddingLeft: distances.wider,
  },
  dbButton: {
    width: '70%',
    marginTop: distances.default,
    backgroundColor: colors.red,
    height: 32,
    borderRadius: distances.half,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signButtonTitle: {
    color: colors.white,
    fontSize: 16,
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
  iceBoldTitlle: {
    marginTop: distances.default,
    color: colors.ice,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: colors.red,
    borderRadius: 8,
    paddingVertical: distances.half,
    width: '70%',
    marginTop: distances.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
