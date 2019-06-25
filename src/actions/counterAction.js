import { 
    INCREMENT,
    DECREMENT,
    MULTIPLY,
    DIVIDE
} from "../constants/action-types";

export function onIncrementCounter(num) {
    return { 
        type: INCREMENT,
        number: num
    }
  };

export function onDecrementCounter(num) {
    return { 
        type: DECREMENT, 
        number: num
    }
};

export function multiplyCounter(num) {
    return { 
        type: MULTIPLY, 
        number: num
    }
  };

export function divideCounter(num) {
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