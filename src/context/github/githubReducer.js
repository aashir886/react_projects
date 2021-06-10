import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../Types'

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                laoding: false
            }

        case GET_USER: 
            return {
                ...state,
                user: action.payload,
                laoding: false
            }

        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                laoding: false
            }


        case GET_REPOS:
                return {
                    ...state,
                    repos: action.payload,
                    laoding: false
                }


        case SET_LOADING: 
            return {
                ...state,
                laoding: true
            }

        default: 
            return state;
    }
}