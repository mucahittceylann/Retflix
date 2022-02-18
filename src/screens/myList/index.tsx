import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DbText, DbView} from '../../components';
import styles from './styles';
import {useSelector} from 'react-redux';
import {favoritesSelector} from '../../appState/movies/selectors';
import MovieList from '../../components/MovieList';

const MyListPage = () => {
  const favorites = useSelector(favoritesSelector);

  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}>
        <DbText style={styles.whiteBoldText}>Favorites</DbText>
        <MovieList data={favorites} imageStyle={styles.image} />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default MyListPage;
