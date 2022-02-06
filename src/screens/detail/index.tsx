import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieDetailsAction} from '../../appState/movies/action';
import {activeMovieSelector} from '../../appState/movies/selectors';
import {DbButton, DbView} from '../../components';
import styles from './styles';

const MovieDetails = () => {
  const movie = useSelector(activeMovieSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailsAction(movie.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView style={styles.scrollView}>
      <DbView style={styles.container}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
          style={styles.detailImage}
        />
        <Text style={styles.iceBoldTitle}>{movie.title}</Text>
        <Text style={styles.overviewTitle}>{movie.overview}</Text>
        <DbButton
          title="Add to My List"
          style={styles.dbButton}
          titleStyle={styles.whiteText}
          onPress={() => null}
        />
      </DbView>
    </ScrollView>
  );
};

export default MovieDetails;
