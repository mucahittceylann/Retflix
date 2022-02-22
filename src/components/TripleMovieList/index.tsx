import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MovieItem from '../Movie';
import {Movie} from '../../shared/types/movie';
import colors from '../../utils/colors';

interface Props {
  data: Movie[];
  onPress?: () => void;
}

const TripleMovieList = ({data, onPress}: Props) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      numColumns={3}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <MovieItem movie={item} imageStyle={styles.image} pressed={onPress} />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {width: '33%', padding: 5},
  list: {backgroundColor: colors.black, width: '100%'},
});

export default TripleMovieList;
