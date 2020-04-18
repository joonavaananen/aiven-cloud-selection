import axios from 'axios';
import _ from 'lodash';
import { GET_PROVIDERS } from './types';

export const getProviders = () => dispatch => {
  axios.get('/api/clouds')
    .then(response => {
      return _.uniq(response.data.clouds.map(cloud => cloud.cloud_provider));
    })
    .then(providers => {
      dispatch({
        type: GET_PROVIDERS,
        payload: providers
      });
    });
};
