import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieLatestAction,
  getMoviesNowPlayingAction,
  getMoviesTopRatedAction,
  getMoviesUpcomingAction,
  getPopularMoviesAction,
} from '../../appState/movies/action';
import {
  latestMovieSelector,
  mostPopularMovieSelector,
  nowPlayingMoviesSelector,
  popularMoviesSelector,
  topRatedMoviesSelector,
  upcomingMoviesSelector,
} from '../../appState/movies/selectors';
import {DbView} from '../../components';
import MovieList from '../../components/MovieList';
import styles from './styles';
import Movie from '../../components/Movie';

const HomePage = () => {
  const popularMovies = useSelector(popularMoviesSelector);
  const nowPlayingMovies = useSelector(nowPlayingMoviesSelector);
  const upcomingMoives = useSelector(upcomingMoviesSelector);
  const topRatedMovies = useSelector(topRatedMoviesSelector);
  const mostPopularMovie = useSelector(mostPopularMovieSelector);
  const latestMovie = useSelector(latestMovieSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesAction());
    dispatch(getMoviesNowPlayingAction());
    dispatch(getMoviesUpcomingAction());
    dispatch(getMoviesTopRatedAction());
    dispatch(getMovieLatestAction());
  }, [dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      <DbView style={styles.mostPopularView}>
        {mostPopularMovie && (
          <Movie
            movie={mostPopularMovie}
            header="Number One"
            imageStyle={styles.mostPopularImage}
          />
        )}
        {latestMovie && (
          <Movie
            movie={latestMovie}
            imageStyle={styles.mostPopularImage}
            header="Latest"
          />
        )}
      </DbView>
      <DbView style={styles.homeView}>
        <MovieList data={popularMovies} header="Popular" horizontal />
        <MovieList
          data={upcomingMoives}
          header="Upcoming"
          horizontal
          imageStyle={styles.listStyle}
        />
        <MovieList
          data={topRatedMovies}
          header="Top Rated"
          horizontal
          imageStyle={styles.listStyle}
        />
        <MovieList
          data={nowPlayingMovies}
          header="Now Playing"
          horizontal
          imageStyle={styles.listStyle}
        />
      </DbView>
    </ScrollView>
  );
};

export default HomePage;
