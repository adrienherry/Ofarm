/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const token = localStorage.getItem('jwt');

export const axiosInstance = axios.create({
  baseURL: 'https://fng-ofarm-api-dev.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
  },
});
