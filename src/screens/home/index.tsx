import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieDetailsAction,
  getMoviesNowPlayingAction,
  getMoviesTopRatedAction,
  getMoviesUpcomingAction,
  getPopularMoviesAction,
} from '../../appState/movies/action';
import {
  nowPlayingMoviesSelector,
  popularMoviesSelector,
  topRatedMoviesSelector,
  upcomingMoviesSelector,
} from '../../appState/movies/selectors';
import {DbText, DbView} from '../../components';
import styles from './styles';

const HomePage = () => {
  const popularMovies = useSelector(popularMoviesSelector);
  const nowPlayingMovies = useSelector(nowPlayingMoviesSelector);
  const upcomingMoives = useSelector(upcomingMoviesSelector);
  const topRatedMovies = useSelector(topRatedMoviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesAction());
    dispatch(getMoviesNowPlayingAction());
    dispatch(getMoviesUpcomingAction());
    dispatch(getMoviesTopRatedAction());
  }, [dispatch]);

  const getMovieDetails = (id: number) => {
    dispatch(getMovieDetailsAction(id));
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid style={styles.scrollView}>
      <DbView style={styles.container}>
        <DbText style={styles.headerTitle}>Popular</DbText>
        <FlatList
          horizontal
          keyExtractor={item => item.title}
          data={popularMovies}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => getMovieDetails(item.id)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.popularStyle}
              />
            </TouchableOpacity>
          )}
        />
        <DbText style={styles.headerTitle}>Upcoming</DbText>
        <FlatList
          horizontal
          keyExtractor={item => item.title}
          data={upcomingMoives}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => getMovieDetails(item.id)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.listStyle}
              />
            </TouchableOpacity>
          )}
        />
        <DbText style={styles.headerTitle}>Top Rated</DbText>
        <FlatList
          horizontal
          keyExtractor={item => item.title}
          data={topRatedMovies}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => getMovieDetails(item.id)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.listStyle}
              />
            </TouchableOpacity>
          )}
        />
        <DbText style={styles.headerTitle}>Now Playing</DbText>
        <FlatList
          horizontal
          keyExtractor={item => item.title}
          data={nowPlayingMovies}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => getMovieDetails(item.id)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.listStyle}
              />
            </TouchableOpacity>
          )}
        />
      </DbView>
    </KeyboardAwareScrollView>
  );
};

export default HomePage;
