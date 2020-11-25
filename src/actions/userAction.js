import axios from 'axios'
import {OpenFeedback} from "./feedbackAction"

var jwt = require('jsonwebtoken');

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const USER_LOADING = 'USER_LOADING';
export const RESET_CREATED = 'RESET_CREATED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';

const LOGIN_URL = 'https://alert-covid.ovh:4001/auth/'
const USER_URL = 'https://alert-covid.ovh:8081/users/'

export function login(user) {
    let data = {
        username : user.username,
        password : user.password
    }
    return dispatch => {

        axios.post(LOGIN_URL,data)
        .then(res => {
            sessionStorage.setItem('token',res.data.data)
            dispatch(getConnectedUser())
            dispatch(OpenFeedback("success","You are connected !"))
        })
        .catch(err =>{
            if(err.response !== undefined){
                dispatch(OpenFeedback("error",err.response.data.data))
            }else{
                dispatch(OpenFeedback("error","A problem occured"))
            }

            
        })
        
    };   
}

export function getConnectedUser() {
    return dispatch => {
        if(jwt.decode(sessionStorage.getItem('token')) !== null){
            const  email = jwt.decode(sessionStorage.getItem('token')).email
            if(email !== null && email !== undefined){
                let bearer  = 'Bearer ' + sessionStorage.getItem('token')
                axios.get(USER_URL+email,{ 'headers': { 'Authorization': bearer } })
                .then(userRes =>{
                    dispatch(loginSuccess(userRes.data))
                })
                .catch(err =>{
                    console.log(err)
                    if(err.response !== undefined){
                        dispatch(OpenFeedback("error",err.response.data.error_description))
                    }else{
                        dispatch(OpenFeedback("error","A problem occured"))
                    }
                })
            }
        }
    }; 
}
      

export function register(user) {
    return dispatch => {

        dispatch(userLoading())
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        
        axios.post(USER_URL,user,{ 'headers': { 'Authorization': bearer } })
        .then(res => {
            dispatch(registerSuccess(user))
            dispatch(OpenFeedback('success',"You are now registered !"))
        })
        .catch(err =>{
            dispatch(OpenFeedback("error",err.response.data.status))
        })
        
    };   
}
  
export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: { user }
});

export const userLoading = () => ({
    type: USER_LOADING,
    payload: { }
});

export const resetCreated = () => ({
    type: RESET_CREATED,
    payload: { }
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
    payload: {}
});

export const logout = () => ({
    type: LOGOUT,
    payload: {}
});