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
  numColumns?: number;
  horizontal?: boolean;
}

const MovieList = ({
  data,
  header,
  imageStyle,
  numColumns,
  horizontal,
}: Props) => {
  return (
    <>
      {header && <DbText style={styles.headerTitle}>{header}</DbText>}
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.title}
        horizontal={horizontal}
        data={data}
        numColumns={numColumns}
        renderItem={({item}) => <Movie movie={item} imageStyle={imageStyle} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 24,
    color: colors.white,
    marginTop: distances.default,
    marginLeft: distances.default,
  },
});

export default MovieList;
