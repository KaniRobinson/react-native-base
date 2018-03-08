import { GET_CURRENT_ROUTE } from '../actions/types'

const INITIAL_STATE = {
    currentRoute: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_ROUTE:
            return { ...state, currentRoute: action.payload }
       default:
            return state
    }
}