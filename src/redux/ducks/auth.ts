/** @format */
import { takeLatest, call, put } from 'redux-saga/effects'

// Actions
const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
const LOGOUT = 'auth/LOGOUT'

// Types
interface LoginPayload {
  email: string
  password: string
}

export interface AuthState {
  user: null | string
  isLoading: boolean
  error: null | string
}

interface LoginAction {
  type: typeof LOGIN_REQUEST
  payload: { email: string; password: string }
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
  payload: string
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE
  payload: string
}

interface LogoutAction {
  type: typeof LOGOUT
}

type AuthActionTypes =
  | LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction

// Reducer
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
}

export default function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.payload,
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

// Action creators
export const loginRequest = (credentials: {
  email: string
  password: string
}): LoginAction => ({
  type: LOGIN_REQUEST,
  payload: credentials,
})

export const loginSuccess = (user: string): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const logout = (): LogoutAction => ({
  type: LOGOUT,
})

// Saga
export const fakeLoginAPI = (credentials: LoginPayload) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === 'demo@demo.com' &&
        credentials.password === 'password'
      ) {
        resolve('demo@demo.com')
      } else {
        reject({ message: 'Invalid credentials' })
      }
    }, 500)
  })
}

export function* loginSaga(action: { type: string; payload: LoginPayload }) {
  try {
    const user: string = yield call(fakeLoginAPI, action.payload)
    yield put(loginSuccess(user))
  } catch (error: any) {
    yield put(loginFailure(error.message))
  }
}

export function* authRootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
}

function* logoutSaga() {
  yield put(logout())
}

export function* deAuthRootSaga() {
  yield takeLatest(LOGOUT, logoutSaga)
}
