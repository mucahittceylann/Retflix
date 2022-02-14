import React, {useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DbView} from '../../components';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';

const MyListPage = () => {
  useEffect(() => {
    firestore()
      .collection('movieList')
      .get()
      .then(res => {
        console.log(res.docs);
      });
  }, []);

  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container} />
    </KeyboardAwareScrollView>
  );
};

export default MyListPage;
