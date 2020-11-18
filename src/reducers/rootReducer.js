import { combineReducers } from 'redux'
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import contactLocationReducer from './contactLocationReducer'
import positiveReducer from './positiveReducer'
import feedbackReducer from './feedbackReducer'


const rootReducer = combineReducers({
    user : userReducer,
    location : locationReducer,
    contactLocation : contactLocationReducer,
    positives : positiveReducer,
    feedback : feedbackReducer
})
export default rootReducer