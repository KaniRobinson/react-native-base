import { 
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    loginError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, ...INITIAL_STATE }
        case USER_LOGIN_ERROR:
            return { ...state, loginError: action.payload }
        case USER_LOGIN_SUCCESS:
            return { ...state, loginError: '' }

        case USER_REGISTER:
            return { ...state, user_data: action.payload }
       default:
            return state;
    }
}