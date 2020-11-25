  
import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    USER_LOADING,
    RESET_CREATED,
    LOGOUT
  } from '../actions/userAction';

  const initialState = {
    connectedUser : null,
    loading: false,
    created : false,
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
      };

    case REGISTER_SUCCESS :

      return {
      ...state,
      loading: false,
      created : true,
      };
    
    case USER_LOADING :

      return {
      ...state,
      loading: true,
      };
    
    case RESET_CREATED :

      return {
      ...state,
      created: false,
      };
    
    case LOGOUT :
      
      return {
        ...state,
        connectedUser : null,
        loading: false,
        error : true,
        messageError : null
      };
    
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}