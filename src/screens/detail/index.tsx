import React, {useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
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
import {DbButton, DbText, DbView} from '../../components';
import ActionsView from './ActionsView';
import styles from './styles';
import {Movie} from '../../shared/types/movie';
import TripleMovieList from '../../components/TripleMovieList';
import colors from '../../utils/colors';

const MovieDetails = () => {
  const movie: Movie = useSelector(activeMovieSelector)!;
  const similarMovies = useSelector(similarMoviesSelector);
  const recommendationsMovies = useSelector(recommendationsMoviesSelector);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>();

  const onPressTop = () => {
    scrollViewRef.current?.scrollTo({y: 0, animated: true});
  };

  useEffect(() => {
    dispatch(getMovieDetailsAction(movie.id));
    dispatch(getMoviesSimilarAction(movie.id));
    dispatch(getMoviesRecommendationsAction(movie.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    //@ts-ignore
    <ScrollView style={styles.scrollView} ref={scrollViewRef}>
      <DbView style={styles.container}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`}}
          style={styles.detailImage}
        />
        <DbText style={styles.iceBoldTitle}>{movie.title}</DbText>
        <DbText style={styles.overviewTitle}>{movie.overview}</DbText>
      </DbView>
      <ActionsView />
      <DbView style={styles.similarView}>
        <DbButton
          title="Similar Movies"
          onPress={() => setCurrentIndex(0)}
          titleStyle={
            currentIndex === 0 ? styles.activeCategory : styles.inactiveCategory
          }
          stickColor={currentIndex === 0 ? colors.red : undefined}
        />
        <DbButton
          title="Recommendation Movies"
          onPress={() => setCurrentIndex(1)}
          titleStyle={
            currentIndex === 1 ? styles.activeCategory : styles.inactiveCategory
          }
          stickColor={currentIndex === 1 ? colors.red : undefined}
        />
      </DbView>

      {currentIndex === 0 ? (
        <TripleMovieList data={similarMovies} onPress={onPressTop} />
      ) : (
        <TripleMovieList data={recommendationsMovies} onPress={onPressTop} />
      )}
    </ScrollView>
  );
};

export default MovieDetails;
