import axios from 'axios'
import {OpenFeedback} from "./feedbackAction"

export const GET_CONTACT_LOCATION_SUCCESS = 'GET_CONTACT_LOCATION_SUCCESS';
export const CONTACT_LOCATION_LOADING = 'CONTACT_LOCATION_LOADING';

const GET_URL = 'https://alert-covid.ovh:8091/locations/'

export function getContactLocation() {
    return dispatch => {
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.get(GET_URL,{ 'headers': { 'Authorization': bearer } })
        .then(res => {
            dispatch(getContactLocationSuccess(res.data))
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
  
export const getContactLocationSuccess = (locations) => ({
    type: GET_CONTACT_LOCATION_SUCCESS,
    payload: {locations}
});


export const loading = () => ({
    type: CONTACT_LOCATION_LOADING,
    payload: { }
});
