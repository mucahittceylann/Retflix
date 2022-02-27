import React from 'react';
import {useSelector} from 'react-redux';
import {likedSelector} from '../../../appState/movies/selectors';
import TripleMovieList from '../../../components/TripleMovieList';

const LikeMovies = () => {
  const liked = useSelector(likedSelector);
  return <TripleMovieList data={liked} />;
};

export default LikeMovies;
