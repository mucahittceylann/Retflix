import axios from 'axios';

const API_KEY = '6095a8f8356c376958824c8146abf613';

export const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  );
};

export const getMovieDetails = (id: number) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
  );
};

export const getMoviesNowPlaying = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  );
};

export const getMoviesUpcoming = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  );
};

export const getMoviesTopRated = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  );
};
