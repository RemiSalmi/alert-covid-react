  
import {
    SEND_LOCATION_SUCCESS,
    LOADING,
    GET_LOCATION_SUCCESS
  } from '../actions/locationAction';

  const initialState = {
    locations : [],
    loading: false,
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
      };
    
    case GET_LOCATION_SUCCESS :
    
    return {
      ...state,
      locations : action.payload.locations,
      loading: false,
      messageError : null
    };

    case LOADING :
    
    return {
      ...state,
      loading: true,
    };
    
    
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}