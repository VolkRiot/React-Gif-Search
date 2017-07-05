import request from 'superagent';
import Firebase from 'firebase';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=64031ee213914402ad2a1d49b11c3b79';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
};

Firebase.initializeApp(config);

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

export function requestGifs(term = null) {
  // Refactored from Redux-Promise which worked to resolve promises it got before the reducers
  // Redux-thunk stops the action creator from dispatching action until dispatch is called.
  return function(dispatch) {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`).then(response => {
      dispatch({
        type: REQUEST_GIFS,
        payload: response
      })
    });
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function signInUser() {
  return {
    type: SIGN_IN_USER
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  };
}

export function signUpUser(credentials) {
  return function(dispatch) {
    Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError());
      })
  }
}

export function authUser() {
    return {
        type: AUTH_USER
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
