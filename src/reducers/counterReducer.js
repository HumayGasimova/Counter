
import { 
  INCREMENT,
  DECREMENT,
  ADD_5,
  SUBSTRACT_5,
  STORE_RESULT,
  DELETE_RESULT
} from "../constants/action-types";

const initialState = {
    counter: 0,
    results: []
  };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
        return newState;
        
    case DECREMENT:
        return {
          ...state,
          counter: state.counter -1
        }
    case ADD_5:
        return {
          ...state,
          counter: state.counter + action.val
        }
    
    case SUBSTRACT_5:
        return {
          ...state,
          counter: state.counter - action.val
        }
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date().getTime(), value: state.counter})
      }
    case DELETE_RESULT:
      const updatedArray = state.results.filter(x => x.id !== action.resultElId)
      return {
        ...state,
        results: updatedArray
      }
  }
      return state;
};

export default counterReducer;