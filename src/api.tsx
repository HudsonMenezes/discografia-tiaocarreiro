import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars',
  // headers: {Authorization: 'hudson.bm23@gmail.com'}
});