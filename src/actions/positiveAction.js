import axios from 'axios'
import {OpenFeedback} from "./feedbackAction"

export const ADD_POSITIVE_SUCCESS = 'ADD_POSITIVE_SUCCESS';
export const GET_POSITIVE_SUCCESS = 'GET_POSITIVE_SUCCESS';
export const POSITIVE_LOADING = 'POSITIVE_LOADING';

const POSITIVE_URL = 'http://146.59.234.45:8090/positive/'

export function imPositive(idUser) {
    return dispatch => {
        dispatch(loading())
        let data = {
            id_user : idUser,
            date : Date.now()
        }
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.post(POSITIVE_URL,data,{ 'headers': { 'Authorization': bearer } })
        .then(res => {
            dispatch(addPositiveSuccess(data))
            dispatch(OpenFeedback("warning","You are tagged as Positive !"))
        })
        .catch(err =>{
            console.log(err)
        })
        
    };   
}

export function getPositive(idUser) {
    return dispatch => {
        dispatch(loading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        axios.get(POSITIVE_URL+idUser,{ 'headers': { 'Authorization': bearer } })
        .then(res => {
            dispatch(getPositiveSuccess(res.data))
            
        })
        .catch(err =>{
            console.log(err)
        })
        
    };   
}

export const loading = () => ({
    type: POSITIVE_LOADING,
    payload: {}
});
    
  
export const addPositiveSuccess = (positive) => ({
    type: ADD_POSITIVE_SUCCESS,
    payload: {positive}
});

export const getPositiveSuccess = (positives) => ({
    type: GET_POSITIVE_SUCCESS,
    payload: {positives}
});