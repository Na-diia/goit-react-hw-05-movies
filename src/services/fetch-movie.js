import axios from 'axios';

axios.defaults.baseURL ='https://api.themoviedb.org/3/';
const apiKey = '0d4113c4d386d0ed78ee145d93be1c52';

export const baseImgUrl = 'https://image.tmdb.org/t/p/w500';;

export const getAllMovie = async(page) => {
   const response = await axios.get(`trending/movie/day?api_key=${apiKey}&page=${page}`);
   return response.data.results;
};

export const getSearchMovies = async(query, page) => {
   const response = await axios.get(`search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`);
   return response.data.results;
};

export const getMovieDetails = async (movieId) => {
   const response = await axios.get(`movie/${movieId}?api_key=${apiKey}&language=en-US`);
   return response.data;
};

export const getMovieCast = async (movieId) => {
   const response = await axios.get(`movie/${movieId}/credits?api_key=${apiKey}&language=en-US`);
   return response.data.cast;
};

export const getCastInformation = async (actorId) => {
  const response = await axios.get(``)
};

export const getMovieReviews = async (movieId) => {
   const response = await axios.get(`movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`);
   return response.data.results;
};