  
import {
    GET_CONTACT_LOCATION_SUCCESS,
    CONTACT_LOCATION_LOADING,
  } from '../actions/contactLocationAction';

  const initialState = {
    locations : [],
    loading: false,
};

export default function contactLocationReducer(state = initialState, action) {
  
  switch(action.type) {

    case GET_CONTACT_LOCATION_SUCCESS :
      
        let newContactLocation = action.payload.locations

      return {
        ...state,
        locations : newContactLocation,
        loading: false,
      };

      case CONTACT_LOCATION_LOADING :
      
      return {
        ...state,
        loading: true,
      };
    
    
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}