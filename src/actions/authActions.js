import * as actionTypes from "../constants/action-types";
import axios from 'axios';

export function authStart() {
    return { 
        type: actionTypes.AUTH_START
    }
};

export function authSuccess(token, userId) {
    return { 
        type: actionTypes.AUTH_SUCCESS, 
        idToken: token,
        userId: userId
    }
};

export function authFail(error) {
    return { 
        type: actionTypes.AUTH_FAIL, 
        error: error
    }
};

export function auth(email, password, isSignup) {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGc5wN44Lg_XZPdU-c34KhMBCIi-TS1uc";
        if(!isSignup){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGc5wN44Lg_XZPdU-c34KhMBCIi-TS1uc";
        }
        console.log(url)
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
        })
        .catch(err => {
            console.log(err.response);
            dispatch(authFail(err.response.data.error));
        })
           
       
    }
};