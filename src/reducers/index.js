import { combineReducers } from 'redux' 

import AppReducer from './AppReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    AppReducer: AppReducer,
    AuthReducer: AuthReducer
})