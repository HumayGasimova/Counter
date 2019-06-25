
import * as actionTypes from "../constants/action-types";

const initialState = {
    counter: 0
  };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + action.number;
        return newState;
        
    case actionTypes.DECREMENT:
        return {
          ...state,
          counter: state.counter - action.number
        }
    case actionTypes.MULTIPLY:
        return {
          ...state,
          counter: state.counter * action.number
        }
    
    case actionTypes.DIVIDE:
        return {
          ...state,
          counter: state.counter / action.number
        }
  }
      return state;
};

export default counterReducer;