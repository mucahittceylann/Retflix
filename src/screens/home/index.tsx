import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DbView} from '../../components';
import styles from './styles';

const HomePage = () => {
  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}></DbView>
    </KeyboardAwareScrollView>
  );
};

export default HomePage;
