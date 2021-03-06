import React, {useEffect} from 'react';
import {Alert, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFavoritesAction,
  getLikedAction,
  getMoviesNowPlayingAction,
  getMoviesTopRatedAction,
  getMoviesUpcomingAction,
  getPopularMoviesAction,
  setFavoritesAction,
  setLikedAction,
} from '../../appState/movies/action';
import {
  mostPopularMovieSelector,
  nowPlayingMoviesSelector,
  popularMoviesSelector,
  topRatedMoviesSelector,
  upcomingMoviesSelector,
} from '../../appState/movies/selectors';
import {DbText, DbView} from '../../components';
import MovieList from '../../components/MovieList';
import styles from './styles';
import MovieItem from '../../components/Movie';
import {Movie} from '../../shared/types/movie';

const HomePage = () => {
  const popularMovies = useSelector(popularMoviesSelector);
  const nowPlayingMovies = useSelector(nowPlayingMoviesSelector);
  const upcomingMoives = useSelector(upcomingMoviesSelector);
  const topRatedMovies = useSelector(topRatedMoviesSelector);
  const mostPopularMovie = useSelector(mostPopularMovieSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesAction());
    dispatch(getMoviesNowPlayingAction());
    dispatch(getMoviesUpcomingAction());
    dispatch(getMoviesTopRatedAction());
    dispatch(
      //@ts-ignore
      getLikedAction((movies: Movie[]) => {
        dispatch(setLikedAction(movies));
      }),
    );
    dispatch(
      getFavoritesAction(
        //@ts-ignore
        (movies: Movie[]) => {
          dispatch(setFavoritesAction(movies));
        },
        () => {
          Alert.alert('Failed to get favorites');
        },
      ),
    );
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      {mostPopularMovie && (
        <DbView style={styles.mostPopularView}>
          <DbText style={styles.mostPopularText}>Most Popular</DbText>
          <MovieItem
            movie={mostPopularMovie}
            imageStyle={styles.mostPopularImage}
          />
        </DbView>
      )}

      <DbView style={styles.homeView}>
        <MovieList
          data={popularMovies}
          header="Popular"
          imageStyle={styles.popularMovieImage}
        />
        <MovieList
          data={upcomingMoives}
          header="Upcoming"
          imageStyle={styles.listStyle}
        />
        <MovieList
          data={topRatedMovies}
          header="Top Rated"
          imageStyle={styles.listStyle}
        />
        <MovieList
          data={nowPlayingMovies}
          header="Now Playing"
          imageStyle={styles.listStyle}
        />
      </DbView>
    </ScrollView>
  );
};

export default HomePage;
