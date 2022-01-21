import React, {createRef, useState} from 'react';
import {Image, TextInput} from 'react-native';
import {DbView, DbTextInput, DbButton, DbText} from '../../components';
import auth from '@react-native-firebase/auth';
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
      signInAction(email, password, user => {
        dispatch(setUserAction(user));
      }),
    );
  }
  return (
    <KeyboardAwareScrollView style={styles.scrollView}>
      <DbView style={styles.container}>
        <Image style={styles.rLogo} source={icons.appLogo} />
        <DbView style={styles.inputView}>
          <DbTextInput
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
