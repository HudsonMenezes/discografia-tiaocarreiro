import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://tiao.supliu.com.br/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'hudson.bm23@gmail.com'}
});