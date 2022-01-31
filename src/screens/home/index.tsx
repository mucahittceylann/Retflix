import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieDetailsAction,
  getPopularMoviesAction,
} from '../../appState/movies/action';
import {popularMoviesSelector} from '../../appState/movies/selectors';
import {DbText, DbView} from '../../components';
import styles from './styles';

const HomePage = () => {
  const popularMovies = useSelector(popularMoviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesAction());
  }, [dispatch]);

  const getMovieDetails = (id: number) => {
    dispatch(getMovieDetailsAction(id));
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}>
        <FlatList
          horizontal
          keyExtractor={item => item.title}
          data={popularMovies}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{marginHorizontal: 20}}
              onPress={() => getMovieDetails(item.id)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
          )}
        />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default HomePage;
