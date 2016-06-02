import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../constants/User'

const initialState = {
    user:  {},
    error: ''
};

export default function user (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, error: '' };
        case LOGOUT_SUCCESS:
            return { ...state, user: action.payload, error: '' };

        case LOGIN_FAIL:
            return { ...state, error: action.payload.message };

        default:
            return state
    }
}
