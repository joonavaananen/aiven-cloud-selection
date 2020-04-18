import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clouds from './clouds';

export default combineReducers({
  form: formReducer,
  clouds
});
