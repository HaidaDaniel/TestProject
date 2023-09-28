import { call, put } from 'redux-saga/effects';
import {
    loginRequest,
    loginSaga,
    fakeLoginAPI,

} from './auth';
import authReducer from './auth';


describe('loginRequest action creator', () => {
    it('creates a LOGIN_REQUEST action', () => {
        const credentials = { email: 'test@test.com', password: 'password' };
        const action = loginRequest(credentials);
        expect(action).toEqual({
            type: 'auth/LOGIN_REQUEST',
            payload: credentials,
        });
    });
});

describe('authReducer handles LOGIN_REQUEST', () => {
    it('handles LOGIN_REQUEST correctly', () => {
        const initialState = { user: null, isLoading: false, error: null };
        const action = { type: 'auth/LOGIN_REQUEST' };
        const nextState = authReducer(initialState, action);
        expect(nextState).toEqual({ user: null, isLoading: true, error: null });
    });
});

describe('loginSaga handles successful login', () => {
    it('handles successful login', () => {
        const action = { type: 'auth/LOGIN_REQUEST', payload: { email: 'demo@demo.com', password: 'password' } };
        const generator = loginSaga(action);

        expect(generator.next().value).toEqual(call(fakeLoginAPI, action.payload));

        const user = 'demo@demo.com';
        expect(generator.next(user).value).toEqual(put({ type: 'auth/LOGIN_SUCCESS', payload: user }));

        expect(generator.next().done).toBe(true);
    });
});

describe('initial state of authReducer', () => {
    it('returns the initial state', () => {
        const initialState = authReducer(undefined, {});
        expect(initialState).toEqual({
            user: null,
            isLoading: false,
            error: null,
        });
    });
});
