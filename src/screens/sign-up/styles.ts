import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

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
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 7,
  },
  signUpButton: {
    width: '70%',
    marginTop: 10,
  },
  rLogo: {
    width: 300,
    height: 200,
  },
});

export default styles;
