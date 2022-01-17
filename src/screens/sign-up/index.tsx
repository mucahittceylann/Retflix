import React, {useState, createRef} from 'react';
import {Image, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import icons from '../../utils/icons';
import {DbView, DbTextInput} from '../../components';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const secondTextInputRef = createRef<TextInput>();
  const thirdTextInputRef = createRef<TextInput>();

  function handleSignUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Navigation
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Bu e-posta adresi kullanımda');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Bu e-posta adresi geçersiz.');
        }
      });
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
      <DbView style={styles.inputView}>
        <DbTextInput
          ref={thirdTextInputRef}
          value={confirmPassword}
          placeholder="Confirm Password"
          returnKeyType="send"
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </DbView>
      <DbView style={styles.signUpButton}>
        {/*TODO: make it separate component as DbButton @mucahit */}
        <Button
          title="Sign Up"
          color={'red'}
          disabled={!email || !password || !confirmPassword}
          onPress={handleSignUp}
        />
      </DbView>
    </DbView>
  );
};

export default SignUp;
