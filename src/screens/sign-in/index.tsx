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
import {setIsSignedInAction} from '../../appState/app/actions';

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
          dispatch(setIsSignedInAction(true));
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
        <DbButton
          disabled={!email || !password}
          title="Sign In"
          style={styles.dbButton}
          titleStyle={styles.signButtonTitle}
          onPress={signIn}
        />
        <DbText
          // @ts-ignore
          onPress={() => navigation.navigate('sign-up')}
          style={styles.iceBoldTitlle}>
          Sign Up?
        </DbText>
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
