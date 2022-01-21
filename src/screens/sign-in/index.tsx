import React, {createRef, useState} from 'react';
import {Image, TextInput} from 'react-native';
import {DbView, DbTextInput, DbButton} from '../../components';
import auth from '@react-native-firebase/auth';
import icons from '../../utils/icons';
import styles from '../sign-up/styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const secondTextInputRef = createRef<TextInput>();
  const thirdTextInputRef = createRef<TextInput>();

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('giris yapildi');
      })
      .catch();
  }
  return (
    <DbView style={styles.container}>
      <Image style={styles.rLogo} source={icons.appLogo} />
      <DbView style={styles.inputView}>
        <DbTextInput
          value={email}
          placeholder="Email"
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
          returnKeyType="next"
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={() => thirdTextInputRef?.current?.focus()}
        />
      </DbView>
      <DbView style={styles.dbButton}>
        {/* Kontrol edilecek */}
        <DbButton
          title="Sig In"
          titleStyle={styles.dbButtonText}
          onPress={signIn}
        />
      </DbView>
    </DbView>
  );
};

export default SignIn;
