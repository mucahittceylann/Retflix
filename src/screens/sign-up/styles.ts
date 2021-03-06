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
    width: '85%',
    marginTop: distances.default,
    backgroundColor: colors.red,
    height: 40,
    borderRadius: distances.half,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signButtonTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
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
});

export default styles;
