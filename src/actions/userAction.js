import axios from 'axios'
const qs = require("querystring");
var jwt = require('jsonwebtoken');

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ERROR = 'ERROR';
export const RESET_MESSAGE_ERROR = 'RESET_MESSAGE_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

const LOGIN_URL = 'http://localhost:7000/auth/realms/master/protocol/openid-connect/token'
const REGISTER_URL = 'http://localhost:8080/users/'

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
            const  email = jwt.decode(sessionStorage.getItem('token')).email
            let user = {
                email: email
            }
            dispatch(loginSuccess(user))
            
        })
        .catch(err =>{
            
            dispatch(error(err.response.data.error_description))
        })
        
    };   
}

export function register(user) {
    return dispatch => {
        console.log(user)
        let bearer  = 'Bearer ' + sessionStorage.getItem('token')
        
        axios.post(REGISTER_URL,user,{ 'headers': { 'Authorization': bearer } })
        .then(res => {
            console.log(res)
            dispatch(registerSuccess(user))
        })
        .catch(err =>{
            dispatch(error(err.response.data.status))
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

export const error = error => ({
    type: ERROR,
    payload: { error }
});

export const resetMessageError = () => ({
    type: RESET_MESSAGE_ERROR,
    payload: {}
});