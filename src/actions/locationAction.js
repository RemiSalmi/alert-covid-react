import axios from 'axios'
import {OpenFeedback} from "./feedbackAction"

const qs = require("querystring");
var jwt = require('jsonwebtoken');


export const SEND_LOCATION_SUCCESS = 'SEND_LOCATION_SUCCESS';
export const LOADING = 'LOADING';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';

const LOCATIONS_URL = "http://146.59.234.45:9000/stream/location/"

export function getLocation(idUser) {
    return dispatch => {
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.get(LOCATIONS_URL+idUser,{ 'headers': { 'Authorization': bearer } })
        .then(res =>{
            console.log(res)
            dispatch(getLocationSuccess(res.data))
        })
        .catch(err =>{
            console.log(err)
            if(err.response !== undefined){
                dispatch(OpenFeedback("error",err.response.data.error_description))
            }else{
                dispatch(OpenFeedback("error","A problem occured"))
            }
        })
        
    };   
}

export function sendLocation(location) {
    return dispatch => {
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.post(LOCATIONS_URL,location,{ 'headers': { 'Authorization': bearer } })
        .then(res =>{
            console.log(res)
            dispatch(sendLocationSuccess(location))
            dispatch(OpenFeedback("success","Your location has been sent !"))
        })
        .catch(err =>{
            console.log(err)
            if(err.response !== undefined){
                dispatch(OpenFeedback("error",err.response.data.error_description))
            }else{
                dispatch(OpenFeedback("error","A problem occured"))
            }
        })
    };   
}

export const getLocationSuccess = locations => ({
    type: GET_LOCATION_SUCCESS,
    payload: { locations }
});
  
export const sendLocationSuccess = location => ({
    type: SEND_LOCATION_SUCCESS,
    payload: { location }
});

export const loading = () => ({
    type: LOADING,
    payload: { }
});
