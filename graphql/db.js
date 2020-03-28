import fetch from 'node-fetch';

const API_URL = "https://yst.am/api/v2/list_movies.json?";
const MOVIE_DETAIL_URL = 'https://yst.am/api/v2/movie_details.json?';


export const getMovies = (limit, rating) => {

  let REQUEST_URL = API_URL;

  if(limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }

  if(rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};


export const getById = (id) => {

  let REQUEST_URL = MOVIE_DETAIL_URL;

  REQUEST_URL += `movie_id=${id}`;

  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movie);

}