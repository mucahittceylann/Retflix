import React, {createRef, useState} from 'react';
import {Image, TextInput} from 'react-native';
import {DbView, DbTextInput, DbButton, DbText} from '../../components';
import auth from '@react-native-firebase/auth';
import icons from '../../utils/icons';
import colors from '../../utils/colors';
import styles from '../sign-up/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const secondTextInputRef = createRef<TextInput>();
  const thirdTextInputRef = createRef<TextInput>();
  const navigation = useNavigation();

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('giris yapildi');
      })
      .catch();
  }
  return (
    <KeyboardAwareScrollView style={styles.scrollView}>
      <DbView style={styles.container}>
        <Image style={styles.rLogo} source={icons.appLogo} />
        <DbView style={styles.inputView}>
          <DbTextInput
            value={email}
            placeholder="Email"
            placeholderTextColor={colors.greyishBrown}
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
            placeholderTextColor={colors.greyishBrown}
            returnKeyType="next"
            onChangeText={setPassword}
            secureTextEntry
            onSubmitEditing={() => thirdTextInputRef?.current?.focus()}
          />
        </DbView>
        <DbView style={styles.dbButton}>
          <DbButton
            title="Sign In"
            titleStyle={styles.signButtonTitle}
            onPress={signIn}
          />
        </DbView>
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
