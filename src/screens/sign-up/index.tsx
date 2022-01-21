import React, {useState, createRef} from 'react';
import {Alert, Image, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import icons from '../../utils/icons';
import {DbView, DbTextInput, DbButton} from '../../components';
import colors from '../../utils/colors';
import {useDispatch} from 'react-redux';
import {
  setUserAction,
  signOutAction,
  signUpAction,
} from '../../appState/users/actions';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const secondTextInputRef = createRef<TextInput>();
  const thirdTextInputRef = createRef<TextInput>();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleSignUp() {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }
    dispatch(
      signUpAction(
        email,
        password,
        user => {
          dispatch(setUserAction(user));
        },
        () => {},
      ),
    );
  }

  function handleSignOut() {
    dispatch(signOutAction());
  }

  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}>
        <Image style={styles.rLogo} source={icons.appLogo} />
        <DbView style={styles.inputView}>
          <DbTextInput
            style={styles.textInput}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={colors.black}
            returnKeyType="next"
            onChangeText={setEmail}
            onSubmitEditing={() => secondTextInputRef?.current?.focus()}
          />
        </DbView>
        <DbView style={styles.inputView}>
          <DbTextInput
            style={styles.textInput}
            ref={secondTextInputRef}
            value={password}
            placeholder="Password"
            placeholderTextColor={colors.black}
            returnKeyType="next"
            onChangeText={setPassword}
            secureTextEntry
            onSubmitEditing={() => thirdTextInputRef?.current?.focus()}
          />
        </DbView>
        <DbView style={styles.inputView}>
          <DbTextInput
            style={styles.textInput}
            ref={thirdTextInputRef}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={colors.black}
            returnKeyType="send"
            onChangeText={setConfirmPassword}
            secureTextEntry
            onSubmitEditing={() => {}}
          />
        </DbView>
        <DbButton
          title="Sign Up"
          onPress={handleSignUp}
          style={styles.dbButton}
          titleStyle={styles.signButtonTitle}
        />
        <DbButton
          title="Sign Out"
          onPress={handleSignOut}
          style={styles.dbButton}
          titleStyle={styles.signButtonTitle}
        />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
