import axios from 'axios';
import _ from 'lodash';
import { GET_CLOUDS } from './types';

export const getClouds = (providerId = false) => dispatch => {
  axios.get('/api/clouds')
    .then(response => {
      return (
        providerId
        ? response.data.clouds.filter(cloud => cloud.cloud_provider === providerId)
        : response.data.clouds
      );
    })
    .then(clouds => {
      dispatch({
        type: GET_CLOUDS,
        payload: clouds
      });
    });
};
