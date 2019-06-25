import { 
    STORE_RESULT,
    DELETE_RESULT
} from "../constants/action-types";

export function storeResult(res) {
    return { 
        type: STORE_RESULT,
        number: res
    }
  };

export function deleteResult(id) {
    return { 
        type: DELETE_RESULT, 
        number: id
    }
};
