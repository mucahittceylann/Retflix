import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {getPopularMoviesAction} from '../../appState/movies/action';
import {moviesSelector} from '../../appState/movies/selectors';
import {DbText, DbView} from '../../components';
import styles from './styles';

const HomePage = () => {
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesAction());
  }, [dispatch]);
  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}>
        <FlatList
          keyExtractor={item => item.title}
          data={movies}
          renderItem={({item}) => (
            <DbText style={{color: 'white'}}>{item.title}</DbText>
          )}
        />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default HomePage;
