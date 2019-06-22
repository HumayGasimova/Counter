
import { 
  ADD_ARTICLE,
  DATA_LOADED
} from "../constants/action-types";

const initialState = {
    counter: 0
  };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
        return Object.assign({}, state, {
          articles: state.articles.concat(action.payload)
        });
    
    case DATA_LOADED:
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
  }
      return state;
};

export default counterReducer;