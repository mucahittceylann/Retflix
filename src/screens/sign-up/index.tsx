import React, {useState, createRef} from 'react';
import {Image, TextInput, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import icons from '../../utils/icons';
import {DbView, DbTextInput, DbButton} from '../../components';
import colors from '../../utils/colors';

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
    <KeyboardAwareScrollView style={styles.scrollView}>
      <DbView style={styles.container}>
        <Image style={styles.rLogo} source={icons.appLogo} />
        <DbView style={styles.inputView}>
          <DbTextInput
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={colors.greyishBrown}
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
        <DbView style={styles.inputView}>
          <DbTextInput
            ref={thirdTextInputRef}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={colors.greyishBrown}
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
          titleStyle={styles.dbButtonText}
        />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
