import { combineReducers } from 'redux'
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import contactLocationReducer from './contactLocationReducer'


const rootReducer = combineReducers({
    user : userReducer,
    location : locationReducer,
    contactLocation : contactLocationReducer
})
export default rootReducer