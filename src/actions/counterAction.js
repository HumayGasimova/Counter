// import { 
//     INCREMENT,
//     DECREMENT,
//     ADD_5,
//     SUBTRACT_5
// } from "../constants/action-types";

// export function incrementCounter() {
//     return { 
//         type: INCREMENT
//     }
//   };

// export function decrementCounter(payload) {
//     return { 
//         type: DECREMENT, 
//         payload 
//     }
// };

// export function add5ToCounter(payload) {
//     return { 
//         type: ADD_5, 
//         payload 
//     }
//   };

// export function subtract5fromCounter(payload) {
//     return { 
//         type: SUBTRACT_5, 
//         payload 
//     }
// };



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