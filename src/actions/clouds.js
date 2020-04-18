import axios from 'axios';
import { GET_CLOUDS } from './types';

export const getClouds = () => async dispatch => {
  const res = await axios.get('/api/clouds');

  dispatch({
    type: GET_CLOUDS,
    payload: res.data.clouds
  });
};
