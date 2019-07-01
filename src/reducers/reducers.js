import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';
import counterReducer from '../reducers/counterReducer';
import resultReducer from '../reducers/resultReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  ctr: counterReducer,
  res: resultReducer
});