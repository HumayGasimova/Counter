import * as actionTypes from "../constants/action-types";

export function storeResult(res) {
    // const up = res * 10
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
