import { GET_PROVIDERS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PROVIDERS:
      return action.payload.map(provider => ({ cloud_provider : provider }));
    default:
      return state;
  }
};
