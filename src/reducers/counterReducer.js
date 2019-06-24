
import * as actionTypes from "../constants/action-types";

const initialState = {
    counter: 0,
    results: []
  };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
        return newState;
        
    case actionTypes.DECREMENT:
        return {
          ...state,
          counter: state.counter -1
        }
    case actionTypes.ADD_5:
        return {
          ...state,
          counter: state.counter + action.val
        }
    
    case actionTypes.SUBTRACT_5:
        return {
          ...state,
          counter: state.counter - action.val
        }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date().getTime(), value: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(x => x.id !== action.resultElId)
      return {
        ...state,
        results: updatedArray
      }
  }
      return state;
};

export default counterReducer;