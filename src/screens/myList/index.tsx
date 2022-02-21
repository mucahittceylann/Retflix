import React from 'react';
import {useSelector} from 'react-redux';
import {favoritesSelector} from '../../appState/movies/selectors';
import TripleMovieList from '../../components/TripleMovieList';

const MyListPage = () => {
  const favorites = useSelector(favoritesSelector);

  return <TripleMovieList data={favorites} />;
};

export default MyListPage;
