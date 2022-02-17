import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieDetailsAction,
  getMoviesRecommendationsAction,
  getMoviesSimilarAction,
} from '../../appState/movies/action';
import {
  activeMovieSelector,
  recommendationsMoviesSelector,
  similarMoviesSelector,
} from '../../appState/movies/selectors';
import {DbButton, DbView} from '../../components';
import ActionsView from './ActionsView';
import styles from './styles';
import {Movie} from '../../shared/types/movie';
import TripleMovieList from '../../components/TripleMovieList';

const MovieDetails = () => {
  const movie: Movie = useSelector(activeMovieSelector)!;
  const similarMovies = useSelector(similarMoviesSelector);
  const recommendationsMovies = useSelector(recommendationsMoviesSelector);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getMovieDetailsAction(movie.id));
    dispatch(getMoviesSimilarAction(movie.id));
    dispatch(getMoviesRecommendationsAction(movie.id));
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
        <DbButton
          title="Similar Movies"
          onPress={() => setCurrentIndex(0)}
          titleStyle={
            currentIndex === 0 ? styles.activeCategory : styles.inactiveCategory
          }
        />
        <DbButton
          title="Recommendation Movies"
          onPress={() => setCurrentIndex(1)}
          titleStyle={
            currentIndex === 1 ? styles.activeCategory : styles.inactiveCategory
          }
        />
      </DbView>

      {currentIndex === 0 ? (
        <TripleMovieList data={similarMovies} />
      ) : (
        <TripleMovieList data={recommendationsMovies} />
      )}
    </ScrollView>
  );
};

export default MovieDetails;
