import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
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
import MovieList from '../../components/MovieList';
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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      <MovieList data={popularMovies} header="Popular" />
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
    </ScrollView>
  );
};

export default HomePage;
