export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import {hashHistory, withRouter }from 'react-router';
import * as ApiUtil from '../util/session_api_utils';

export const login = user => dispatch => {
  return(
  ApiUtil.login(user).then(resp => resp.json())
  .then(json => dispatch(receiveCurrentUser(json)))
  .catch(resp => dispatch(receiveErrors(JSON.parse(resp._bodytText))))
  );
};

export const logout = () => dispatch => {
  return (
  ApiUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);
};
export const signup = user => dispatch => {
  debugger;
  return(
  ApiUtil.signup(user).then(resp => resp.json())
  .then(json => dispatch(receiveCurrentUser(json)))
  .catch(resp => dispatch(receiveErrors(JSON.parse(resp._bodytText))))
  );
};

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => ({

  type: RECEIVE_ERRORS,
  errors
});
