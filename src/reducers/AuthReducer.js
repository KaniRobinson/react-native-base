import { USER_LOGIN, USER_REGISTER } from '../actions/types';

const INITIAL_STATE = {
    login_states: '', 
    user_data: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, login_states: action.payload }

        case USER_REGISTER:
            return { ...state, user_data: action.payload }
       default:
            return state;
    }
}