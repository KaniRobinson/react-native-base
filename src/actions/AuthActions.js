import { 
    USER_LOGIN, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_ERROR, 
    USER_LOGOUT,
    USER_LOGOUT_ERROR,
    USER_LOGOUT_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_ERROR,
    USER_REGISTER_SUCCESS,
    USER_SHOULD_BE_HERE
} from './types'
import { Actions } from 'react-native-router-flux'
import Authentication from '../api/Authentication'
import Method from '../api/Method'

/**
 * Login Method
 * 
 * @param {string} email 
 * @param {string} password 
 */
export const userLogin = (email, password) => {
    let storage = new Method.Storage()

    return dispatch => {
        dispatch({
            type: USER_LOGIN
        })

        new Authentication.Login(email, password)
        .then(response => {
            if(response.data.error == 0) {
                storage.set('@User:isAuthenticated', true)
                .then(value => userLoginSuccess(dispatch))
            } else {
                if(response.data.message == 'failure') {
                    userLoginError(response.data.data, dispatch)
                }
            }
        })
        .catch(error => {
            userLoginError('Unexpected Error. Please try again later.', dispatch)
        })
    }
}

/**
 * Success Login Dispatch
 * @param {any} dispatch 
 */
export const userLoginSuccess = (dispatch) => {
    dispatch ({ type: USER_LOGIN_SUCCESS })
    Actions.dashboard()
}

/**
 * Error in Login Dispatch
 * @param {any} errors 
 * @param {any} dispatch 
 */
export const userLoginError = (errors, dispatch) => {
    dispatch ({ type: USER_LOGIN_ERROR, payload: errors })
}

/**
 * Check if user is allowed on view
 * 
 * @param {boolean} authRequired 
 */
export const userShouldBeHere = (authRequired) => {
    let storage = new Method.Storage()

    return dispatch => {
        dispatch({
            type: USER_SHOULD_BE_HERE
        })

        storage.get('@User:isAuthenticated')
        .then(value => {
            if(authRequired == true && value == 'false') {
                Actions.index()
            }

            if(authRequired == false && value == 'true') {
                Actions.dashboard()
            }
        })
    }
}

/**
 * Log user out
 * 
 * @param {boolean} authRequired 
 */
export const userLogout = () => {
    let storage = new Method.Storage()

    return dispatch => {
        dispatch({
            type: USER_LOGOUT
        })

        new Authentication.Logout()
        .then(response => {
            storage.set('@User:isAuthenticated', false)
            .then(value => userLogoutSuccess(dispatch))
        })
        .catch(error => {
            userLogoutError('Unexpected Error. Please try again later.', dispatch)
        })
    }
}

/**
 * Success Logout Dispatch
 * 
 * @param {any} dispatch 
 */
export const userLogoutSuccess = (dispatch) => {
    dispatch ({ type: USER_LOGOUT_SUCCESS })
    Actions.index()
}

/**
 * Logout Dispatch
 * 
 * @param {any} errors 
 * @param {any} dispatch 
 */
export const userLogoutError = (errors, dispatch) => {
    dispatch ({ type: USER_LOGOUT_ERROR, payload: errors })
}

/**
 * Register Method
 * 
 * @param {string} username 
 * @param {string} first_name 
 * @param {string} last_name 
 * @param {string} email 
 * @param {string} cellphone 
 * @param {string} password 
 * @param {string} cpassword 
 */
export const userRegister = (username, first_name, last_name, email, cellphone, password, cpassword) => {
    let storage = new Method.Storage()

    return dispatch => {
        dispatch({
            type: USER_REGISTER
        })

        new Authentication.Register(username, first_name, last_name, email, cellphone, password, cpassword)
        .then(response => {
            if(response.data.error == 0) {
                storage.set('@User:isAuthenticated', true)
                .then(value => userRegisterSuccess(dispatch))
            } else {
                if(response.data.message == 'failure') {
                    userRegisterError(response.data.data, dispatch)
                }
            }
        })
        .catch(error => {
            userLoginError('Unexpected Error. Please try again later.', dispatch)
        })
    }
}

/**
 * Success Registeer Dispatch
 * @param {any} dispatch 
 */
export const userRegisterSuccess = (dispatch) => {
    dispatch ({ type: USER_REGISTER_SUCCESS })
    Actions.dashboard()
}

/**
 * Error in Register Dispatch
 * @param {any} errors 
 * @param {any} dispatch 
 */
export const userRegisterError = (errors, dispatch) => {
    dispatch ({ type: USER_REGISTER_ERROR, payload: errors })
}