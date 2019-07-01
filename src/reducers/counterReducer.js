
import * as actionTypes from "../constants/action-types";
import {
  updateObject
} from './utility';

const initialState = {
    counter: 0
  };

const increment = (state, action) => {
  const newState = Object.assign({}, state);
  newState.counter = state.counter + action.number;
    return newState;
}

const decrement = (state, action) => {
  return updateObject(state, {counter: state.counter - action.number});
}

const multiply = (state, action) => {
  return {
    ...state,
    counter: state.counter * action.number
  };
}

const divide = (state, action) => {
  return {
    ...state,
    counter: state.counter / action.number
  };
}
  
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT: return increment(state, action);
    case actionTypes.DECREMENT: return decrement(state, action);
    case actionTypes.MULTIPLY: return  multiply(state, action);
    case actionTypes.DIVIDE: return divide(state, action);
  }
      return state;
};

export default counterReducer;