import React from 'react';
import {View, Image, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from '../styles';
const signUp = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const secondTextInputRef = React.useRef<TextInput>(null);
  const thirdTextInputRef = React.useRef<TextInput>(null);

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
    <View style={styles.container}>
      <Image style={styles.rLogo} source={require('../images/Rlogo.jpg')} />
      <View style={styles.inputView}>
        <TextInput
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={setEmail}
          onSubmitEditing={() => secondTextInputRef?.current?.focus}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={secondTextInputRef}
          value={password}
          placeholder="Şifre"
          returnKeyType="next"
          onChangeText={setPassword}
          secureTextEntry
          onSubmitEditing={() => thirdTextInputRef?.current?.focus}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={thirdTextInputRef}
          value={confirmPassword}
          placeholder="Şifreyi tekrar giriniz"
          returnKeyType="send"
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.signUpButton}>
        <Button
          title="Kayıt Ol"
          color={'red'}
          disabled={!email || !password || !confirmPassword}
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
};

export default signUp;
