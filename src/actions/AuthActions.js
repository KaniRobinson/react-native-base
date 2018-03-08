import { USER_LOGIN, USER_REGISTER } from './types'
import { Actions } from 'react-native-router-flux'
import Authentication from '../api/Authentication'
import Method from '../api/Method'

export const userLogin = (email, password) => {
    let storage = new Method.Storage(),
        dispatch = {
            type: USER_LOGIN,
            payload: {
                success: false,
                data: null
            }
        }

    new Authentication.Login(email, password)
        .then(response => {
            if(response.data.error == 0) {
                storage.set('@User:isAuthenticated', true)
                .then((value) => {
                    dispatch.payload.success = true
                    Actions.dashboard()
                })
            } else {
                if(response.data.message == 'failure') {
                    dispatch.payload.data = response.data.data
                }
            }
        })
        .catch(error => {
            dispatch.payload.data.System.unexpected = 'Unexpected Error. Please try again later.'
        })

        return dispatch
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