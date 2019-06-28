import { 
    INCREMENT,
    DECREMENT,
    MULTIPLY,
    DIVIDE
} from "../constants/action-types";


// export const saveResult = (num) => {
        
//     }

export function increment(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({ 
                    type: INCREMENT,
                    number: num
                })
        }, 2000)
    }
  };

export function decrement(num) {
    return { 
        type: DECREMENT, 
        number: num
    }
};

export function multiply(num) {
    return { 
        type: MULTIPLY, 
        number: num
    }
  };

export function divide(num) {
    return { 
        type: DIVIDE, 
        number: num
    }
};



// export function getData() {
// return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//         dispatch({ 
//             type: DATA_LOADED, 
//             payload: json 
//         });
//     });
// };
// }