
import * as actionTypes from "../constants/action-types";

import {
  updateObject
} from './utility';

const initialState = {
    results: []
  };
const deleteResult = (state, action) => {
   const updatedArray = state.results.filter(x => x.id !== action.id)
  return updateObject(state, { results: updatedArray})
}

function resultReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date().getTime(), value: action.value})
      }
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action)
  }
      return state;
};

export default resultReducer;