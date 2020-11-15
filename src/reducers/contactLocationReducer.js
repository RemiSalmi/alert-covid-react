  
import {
    GET_CONTACT_LOCATION_SUCCESS,
    ERROR,
    CONTACT_LOCATION_LOADING,
    RESET_MESSAGE_ERROR,
  } from '../actions/contactLocationAction';

  const initialState = {
    locations : [],
    loading: false,
    messageError : null
};

export default function contactLocationReducer(state = initialState, action) {
  
  switch(action.type) {

    case GET_CONTACT_LOCATION_SUCCESS :
      
        let newContactLocation = action.payload.locations

      return {
        ...state,
        locations : newContactLocation,
        loading: false,
        messageError : null
      };

      case CONTACT_LOCATION_LOADING :
      
      return {
        ...state,
        loading: true,
        messageError : null
      };
    
    
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}