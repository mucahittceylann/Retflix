import React, {createRef, useState} from 'react';
import {Alert, Image, TextInput} from 'react-native';
import {DbView, DbTextInput, DbButton, DbText} from '../../components';
import icons from '../../utils/icons';
import colors from '../../utils/colors';
import styles from '../sign-up/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUserAction, signInAction} from '../../appState/users/actions';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const secondTextInputRef = createRef<TextInput>();
  const thirdTextInputRef = createRef<TextInput>();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function signIn() {
    dispatch(
      signInAction(
        email,
        password,
        (user: any) => {
          dispatch(setUserAction(user));
          // navigation
        },
        () => {
          Alert.alert('Check your email or password.');
        },
      ),
    );
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
            placeholderTextColor={colors.black}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={setEmail}
            onSubmitEditing={() => secondTextInputRef?.current?.focus()}
          />
        </DbView>
        <DbView style={styles.inputView}>
          <DbTextInput
            ref={secondTextInputRef}
            style={styles.textInput}
            value={password}
            placeholder="Password"
            placeholderTextColor={colors.black}
            returnKeyType="next"
            onChangeText={setPassword}
            secureTextEntry
            onSubmitEditing={() => thirdTextInputRef?.current?.focus()}
          />
        </DbView>
        <DbButton
          disabled={!email || !password}
          title="Sign In"
          style={styles.signInButton}
          titleStyle={styles.signButtonTitle}
          onPress={signIn}
        />
        <DbText
          onPress={() => navigation.navigate('sign-up')}
          style={styles.iceBoldTitlle}>
          Sign Up?
        </DbText>
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
