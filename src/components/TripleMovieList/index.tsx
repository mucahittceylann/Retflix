import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MovieItem from '../Movie';
import {Movie} from '../../shared/types/movie';

interface Props {
  data: Movie[];
}

const TripleMovieList = ({data}: Props) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <MovieItem movie={item} imageStyle={styles.image} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {width: '33%', padding: 5},
});

export default TripleMovieList;
