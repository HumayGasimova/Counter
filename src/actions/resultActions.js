import * as actionTypes from "../constants/action-types";

export function storeResult(res) {
    return { 
        type: actionTypes.STORE_RESULT,
        value: res
    }
  };

export function deleteResult(id) {
    return { 
        type: actionTypes.DELETE_RESULT, 
        id: id
    }
};
