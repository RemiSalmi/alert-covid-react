  
import {
    SEND_LOCATION_SUCCESS,
    ERROR,
    LOADING,
    DELETE_LOCATION_SUCCESS,
    RESET_MESSAGE_ERROR,
  } from '../actions/locationAction';

  const initialState = {
    locations : [],
    loading: false,
    messageError : null
};

export default function locationReducer(state = initialState, action) {
  
  switch(action.type) {

    case SEND_LOCATION_SUCCESS :
      
        let newLocation = state.locations
        newLocation.push(action.payload.location)

      return {
        ...state,
        locations : newLocation,
        loading: false,
        messageError : null
      };

      case DELETE_LOCATION_SUCCESS :
      
        let deleteLocation = state.locations
        deleteLocation.splice(action.payload.index,1)

      return {
        ...state,
        locations : deleteLocation,
        loading: false,
        messageError : null
      };
    
      case LOADING :
      
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