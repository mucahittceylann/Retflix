import axios from 'axios';

const API_KEY = '6095a8f8356c376958824c8146abf613';

export const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  );
};

export const getMovieDetails = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
  );
};
