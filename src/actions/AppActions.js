import { GET_CURRENT_ROUTE } from './types';


export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}


export const getCurrentRoute = (currentRoute) => {
    return {
        type: GET_CURRENT_ROUTE,
        payload: currentRoute
    }

    // this.props.title
}