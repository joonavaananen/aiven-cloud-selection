import _ from 'lodash';
import { GET_CLOUDS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CLOUDS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'cloud_name')
      };
    default:
      return state;
  }
};
