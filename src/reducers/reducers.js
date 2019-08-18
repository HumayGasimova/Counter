import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';
import counterReducer from '../reducers/counterReducer';
import resultReducer from '../reducers/resultReducer';
import authReducer from '../reducers/authReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  ctr: counterReducer,
  res: resultReducer,
  auth: authReducer
});