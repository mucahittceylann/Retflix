import React, {useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DbText, DbView} from '../../components';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {activeMovieSelector} from '../../appState/movies/selectors';
import Movie from '../../components/Movie';

const MyListPage = () => {
  const movie = useSelector(activeMovieSelector);

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
      <DbView style={styles.container}>
        <DbText style={styles.whiteBoldText}>Favorites</DbText>
        <Movie movie={movie} />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default MyListPage;
