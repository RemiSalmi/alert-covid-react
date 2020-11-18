import axios from 'axios'
import {OpenFeedback} from "./feedbackAction"

const qs = require("querystring");
var jwt = require('jsonwebtoken');

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';

const LOGIN_URL = 'http://alert-covid.ovh:8080/auth/realms/master/protocol/openid-connect/token'
const USER_URL = 'http://alert-covid.ovh:8081/users/'
const REGISTER_URL = 'http://alert-covid.ovh:8081/users/'

export function login(user) {
    let data = {
        client_id : "alert-covid-react",
        grant_type : "password",
        scope : "openid",
        username : user.username,
        password : user.password
    }
    return dispatch => {

        axios.post(LOGIN_URL,qs.stringify(data))
        .then(res => {
            sessionStorage.setItem('token',res.data.access_token)
            dispatch(getConnectedUser())
            dispatch(OpenFeedback("success","You are connected !"))
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
        console.log(user)
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        
        axios.post(REGISTER_URL,user,{ 'headers': { 'Authorization': bearer } })
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

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
    payload: {}
});

export const logout = () => ({
    type: LOGOUT,
    payload: {}
});