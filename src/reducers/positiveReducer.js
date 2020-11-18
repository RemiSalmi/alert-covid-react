  
import {
    ADD_POSITIVE_SUCCESS,
    POSITIVE_LOADING,
    GET_POSITIVE_SUCCESS
  } from '../actions/positiveAction';

  const initialState = {
    positives : [],
    loading: false,
};

export default function PositiveReducer(state = initialState, action) {
  
  switch(action.type) {

    case ADD_POSITIVE_SUCCESS :

        let newPositive = state.positives
        newPositive.push(action.payload.positive)
      return {
        ...state,
        positives : newPositive,
        loading: false,
      };
    
    case GET_POSITIVE_SUCCESS :
    
        return {
        ...state,
        positives : action.payload.positives,
        loading: false,
        };
    
   
    case POSITIVE_LOADING :
    
    return {
      ...state,
      loading: true,
    };
    
    
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}