import * as actionTypes from "../constants/action-types";


// export const saveResult = (num) => {
        
//     }

export function increment(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({ 
                    type: actionTypes.INCREMENT,
                    number: num
                })
        }, 2000)
    }
  };

export function decrement(num) {
    return { 
        type: actionTypes.DECREMENT, 
        number: num
    }
};

export function multiply(num) {
    return { 
        type: actionTypes.MULTIPLY, 
        number: num
    }
  };

export function divide(num) {
    return { 
        type: actionTypes.DIVIDE, 
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