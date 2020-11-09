  
import {
    LOGIN_SUCCESS,
    ERROR,
    RESET_MESSAGE_ERROR,
    REGISTER_SUCCESS
  } from '../actions/userAction';

  const initialState = {
    connectedUser : null,
    loading: false,
    created : false,
    messageError : null
};

export default function userReducer(state = initialState, action) {
  
  switch(action.type) {

    case LOGIN_SUCCESS :
      
      let newConnectedUser = action.payload.user

      return {
        ...state,
        connectedUser : newConnectedUser,
        loading: false,
        error : false,
        messageError : null
      };

    case REGISTER_SUCCESS :

      return {
      ...state,
      loading: false,
      created : true,
      messageError : null,
      };
    
    case ERROR :
      
      let newError = action.payload.error

      return {
        ...state,
        loading: false,
        error : true,
        messageError : newError
      };
    
    case RESET_MESSAGE_ERROR :

    return {
    ...state,
    loading: false,
    messageError : null,
    };
    
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}