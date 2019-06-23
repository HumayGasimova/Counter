
import { 
  INCREMENT,
  DECREMENT,
  ADD_5,
  SUBSTRACT_5
} from "../constants/action-types";

const initialState = {
    counter: 0
  };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
        return {
          counter: state.counter +1
        }
    case DECREMENT:
        return {
          counter: state.counter -1
        }
    case ADD_5:
        return {
          counter: state.counter +5
        }
    
    case SUBSTRACT_5:
        return {
          counter: state.counter -5
        }
  }
      return state;
};

export default counterReducer;