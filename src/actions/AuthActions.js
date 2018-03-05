import axios from 'axios';
import { USER_LOGIN, USER_REGISTER } from './types';


export const userLogin = (email, password) => {
    return {
        type: USER_LOGIN,
        payload: {
            email,
            password
        }
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