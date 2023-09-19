import { takeLatest, call, put } from 'redux-saga/effects';

// Actions
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
export const LOGOUT = 'auth/LOGOUT';

// Reducer
const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

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
            return initialState
                ;
        default:
            return state;
    }
}

// Action creators
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


//// Saga 

const fakeLoginAPI = (credentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email === 'demo@demo.com' && credentials.password === 'password') {
                resolve('demo@demo.com');
            } else {
                reject({ message: 'Invalid credentials' });
            }
        }, 500);
    });
};

function* loginSaga(action) {
    try {
        const user = yield call(fakeLoginAPI, action.payload);
        yield put(loginSuccess(user));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

export function* authRootSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);

}

function* logoutSaga() {

    yield put(logout());
}

export function* deAuthRootSaga() {
    yield takeLatest(LOGOUT, logoutSaga);
}

export const authSagas = [authRootSaga, deAuthRootSaga]
    ;
