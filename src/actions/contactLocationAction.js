import axios from 'axios'
const qs = require("querystring");
var jwt = require('jsonwebtoken');

export const GET_CONTACT_LOCATION_SUCCESS = 'GET_CONTACT_LOCATION_SUCCESS';
export const ERROR = 'ERROR';
export const CONTACT_LOCATION_LOADING = 'CONTACT_LOCATION_LOADING';
export const RESET_MESSAGE_ERROR = 'RESET_MESSAGE_ERROR';

const GET_URL = 'http://146.59.234.45:8091/locations/'

export function getContactLocation() {
    return dispatch => {
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.get(GET_URL,{ 'headers': { 'Authorization': bearer } })
        .then(res => {
            console.log(res)
            dispatch(getContactLocationSuccess(res.data))
        })
        .catch(err =>{
            console.log(err)
            if(err.response !== undefined){
                dispatch(error(err.response.data.error_description))
            }else{
                dispatch(error("A problem occured"))
            }

            
        })
    };   
}
  
export const getContactLocationSuccess = (locations) => ({
    type: GET_CONTACT_LOCATION_SUCCESS,
    payload: {locations}
});


export const loading = () => ({
    type: CONTACT_LOCATION_LOADING,
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