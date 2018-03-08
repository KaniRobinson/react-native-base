import { 
    USER_LOGIN, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_ERROR, 
    USER_REGISTER,
    USER_SHOULD_BE_HERE
} from './types'
import { Actions } from 'react-native-router-flux'
import Authentication from '../api/Authentication'
import Method from '../api/Method'

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

const userLoginSuccess = (dispatch) => {
    dispatch ({ type: USER_LOGIN_SUCCESS })
    Actions.dashboard()
}

const userLoginError = (errors, dispatch) => {
    dispatch ({ type: USER_LOGIN_ERROR, payload: errors })
}

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

export const userRegister = (username, first_name, last_name, email, nhs_number, phone_number, password, confirm_password) => {
    return {
        type: USER_REGISTER,
        payload: {
            username, 
            first_name, 
            last_name, 
            email, 
            nhs_number, 
            phone_number, 
            password, 
            confirm_password
        }
    }
}


export const getCurrentRoute = (currentRoute) => {
    return {
        type: GET_CURRENT_ROUTE,
        payload: currentRoute
    }
}