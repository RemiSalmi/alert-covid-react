  
import {
    OPEN_FEEDBACK,
    CLOSE_FEEDBACK
    
  } from '../actions/feedbackAction';

  const initialState = {
    open : false,
    type: "warning",
    message : null
};

export default function FeedbackReducer(state = initialState, action) {
  
  switch(action.type) {

    case OPEN_FEEDBACK :
      
      return {
        ...state,
        open: true,
        type : action.payload.type,
        message: action.payload.message,
      };
    
    case CLOSE_FEEDBACK :
    
        return {
        ...state,
        open: false,
        };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}