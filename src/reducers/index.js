import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clouds from './clouds';
import providers from './providers';

export default combineReducers({
  form: formReducer,
  clouds,
  providers
});
