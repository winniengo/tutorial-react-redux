import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

const sessionMiddleware = store => next => action => {
  const error = e => store.dispatch(receiveErrors(e.responseJSON));
  const success = data => store.dispatch(receiveCurrentUser(data))

  switch(action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, success, error)
      return next(action);
    default:
      return next(action);
  }
};

export default sessionMiddleware;