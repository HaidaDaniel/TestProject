// actions
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
export const LOGOUT = 'auth/LOGOUT';

// initial state
const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

// reducer
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: null,
            };
        default:
            return state;
    }
}

// action creators
export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logout = () => ({
    type: LOGOUT,
});