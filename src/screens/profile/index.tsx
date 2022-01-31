import {DbView} from '../../components';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const ProfilePage = () => {
  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}></DbView>
    </KeyboardAwareScrollView>
  );
};

export default ProfilePage;
