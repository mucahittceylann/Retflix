import {FlatList, StyleSheet, ImageStyle} from 'react-native';
import React from 'react';
import DbText from '../DbText';
import distances from '../../utils/distances';
import colors from '../../utils/colors';
import Movie from '../Movie';

interface Props {
  data: Array<any>;
  header?: string;
  imageStyle?: ImageStyle;
}

const MovieList = ({data, header, imageStyle}: Props) => {
  return (
    <>
      {header && <DbText style={styles.headerTitle}>{header}</DbText>}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.title}
        data={data}
        renderItem={({item}) => <Movie movie={item} imageStyle={imageStyle} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontStyle: 'italic',
    fontSize: 24,
    color: colors.gray,
    marginTop: distances.default,
    marginBottom: distances.half,
    marginLeft: distances.default,
  },
});

export default MovieList;
