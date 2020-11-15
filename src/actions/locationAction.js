import axios from 'axios'
const qs = require("querystring");
var jwt = require('jsonwebtoken');

export const SEND_LOCATION_SUCCESS = 'SEND_LOCATION_SUCCESS';
export const DELETE_LOCATION_SUCCESS = 'DELETE_LOCATION_SUCCESS';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const RESET_MESSAGE_ERROR = 'RESET_MESSAGE_ERROR';

export function sendLocation(location) {
    return dispatch => {
        dispatch(loading())
        dispatch(sendLocationSuccess(location))
    };   
}

export function deleteLocation(location,index) {
    return dispatch => {
        dispatch(loading())
        dispatch(deleteLocationSuccess(location,index))
    };   
}
  
export const sendLocationSuccess = location => ({
    type: SEND_LOCATION_SUCCESS,
    payload: { location }
});

export const deleteLocationSuccess = (location, index) => ({
    type: DELETE_LOCATION_SUCCESS,
    payload: { location,index }
});

export const loading = () => ({
    type: LOADING,
    payload: { }
});

export const error = error => ({
    type: ERROR,
    payload: { error }
});

export const resetMessageError = () => ({
    type: RESET_MESSAGE_ERROR,
    payload: {}
});