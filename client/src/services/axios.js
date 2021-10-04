/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fng-ofarm-api-dev.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
