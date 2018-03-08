import { 
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,
    USER_LOGOUT,
    USER_LOGOUT_ERROR,
    USER_LOGOUT_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
    loginError: '',
    registerError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, ...INITIAL_STATE }
            break;
        case USER_LOGIN_ERROR:
            return { ...state, loginError: action.payload }
            break;
        case USER_LOGIN_SUCCESS:
            return { ...state, loginError: '' }
            break;
        case USER_LOGOUT:
            return { ...state, ...INITIAL_STATE }
            break;
        case USER_LOGOUT_ERROR:
            return { ...state, ...INITIAL_STATE }
            break;
        case USER_LOGOUT_SUCCESS:
            return { ...state, ...INITIAL_STATE }
            break;
        case USER_REGISTER:
            return { ...state, ...INITIAL_STATE }
            break;
        case USER_REGISTER_ERROR:
            return { ...state, registerError: action.payload }
            break;
        case USER_REGISTER_SUCCESS:
            return { ...state, registerError: '' }
            break;
       default:
            return state
    }
}