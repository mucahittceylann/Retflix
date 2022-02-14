import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieDetailsAction,
  getMoviesSimilarAction,
} from '../../appState/movies/action';
import {
  activeMovieSelector,
  similarMoviesSelector,
} from '../../appState/movies/selectors';
import {DbView} from '../../components';
import MovieList from '../../components/MovieList';
import ActionsView from './ActionsView';
import styles from './styles';
import {Movie} from '../../shared/types/movie';

const MovieDetails = () => {
  const movie: Movie = useSelector(activeMovieSelector)!;
  const similarMovies = useSelector(similarMoviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailsAction(movie.id));
    dispatch(getMoviesSimilarAction(movie.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <DbView style={styles.container}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`}}
          style={styles.detailImage}
        />
        <Text style={styles.iceBoldTitle}>{movie.title}</Text>
        <Text style={styles.overviewTitle}>{movie.overview}</Text>
      </DbView>
      <ActionsView />
      <DbView style={styles.similarView}>
        <MovieList data={similarMovies} header="Similar Movies" />
      </DbView>
    </ScrollView>
  );
};

export default MovieDetails;
