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
  mostPopularMovieSelector,
  nowPlayingMoviesSelector,
  popularMoviesSelector,
  topRatedMoviesSelector,
  upcomingMoviesSelector,
} from '../../appState/movies/selectors';
import {DbText, DbView} from '../../components';
import MovieList from '../../components/MovieList';
import styles from './styles';
import Movie from '../../components/Movie';

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
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      {mostPopularMovie && (
        <DbView style={styles.popularView}>
          <DbText style={styles.newText}>Number One</DbText>
          <Movie
            movie={mostPopularMovie}
            imageStyle={styles.mostPopularMovie}
          />
        </DbView>
      )}

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
