
import * as actionTypes from "../constants/action-types";

const initialState = {
    results: []
  };

function resultReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date().getTime(), value: action.result})
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

export default resultReducer;