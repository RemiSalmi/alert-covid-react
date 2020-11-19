import axios from 'axios'
import {OpenFeedback} from "./feedbackAction"

export const SEND_LOCATION_SUCCESS = 'SEND_LOCATION_SUCCESS';
export const LOADING = 'LOADING';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';

const LOCATIONS_URL = "https://alert-covid.ovh:9000/stream/location/"

export function getLocation(idUser) {
    return dispatch => {
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.get(LOCATIONS_URL+idUser,{ 'headers': { 'Authorization': bearer } })
        .then(res =>{
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
        console.log("start send")
        console.log(location)
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.post(LOCATIONS_URL,location,{ 'headers': { 'Authorization': bearer } })
        .then(res =>{
            console.log("ok")
            dispatch(sendLocationSuccess(location))
            dispatch(OpenFeedback("success","Your location has been sent !"))
        })
        .catch(err =>{
            console.log("not ok")
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
