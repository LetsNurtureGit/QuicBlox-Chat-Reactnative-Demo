import {
  AUTH_GET_SESSION_FAIL,
  AUTH_GET_SESSION_REQUEST,
  AUTH_GET_SESSION_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
} from '../constants'

export function sessionGet() {
  return { type: AUTH_GET_SESSION_REQUEST }
}

export function sessionGetSuccess(session) {
  return { type: AUTH_GET_SESSION_SUCCESS, payload: session }
}

export function sessionGetFail(error) {
  return { type: AUTH_GET_SESSION_FAIL, error }
}

export function loginRequest({ login, password }) {
  return { type: AUTH_LOGIN_REQUEST, payload: { login, password } }
}

export function loginSuccess({ session, user }) {
  return { type: AUTH_LOGIN_SUCCESS, payload: { session, user } }
}

export function loginFail(error) {
  return { type: AUTH_LOGIN_FAIL, error }
}

export function logoutRequest() {
  return { type: AUTH_LOGOUT_REQUEST }
}

export function logoutSuccess() {
  return { type: AUTH_LOGOUT_SUCCESS }
}

export function logoutFail(error) {
  return { type: AUTH_LOGOUT_FAIL, error }
}