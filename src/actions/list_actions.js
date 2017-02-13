export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as APIUtil from '../util/list_api_util';
import {hashHistory, withRouter }from 'react-router';


export const fetchAllLists = () => dispatch => {
  return (
  APIUtil.fetchAllLists()
  .then(resp => resp.json())
  .then(json => dispatch(receiveAllLists(json)))
);
};

export const fetchList = id => dispatch => (
  APIUtil.fetchList(id).then(list => dispatch(receiveList(list)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const createList = list => dispatch => {
  return (
    APIUtil.createList(list)
    .then(resp => resp.json())
    .then(json => dispatch(receiveList(json))));
};

export const updateList = list => dispatch => {
  return (
    APIUtil.updateList(list)
    .then(resp => resp.json())
    .then(json => dispatch(receiveList(json))));
};

export const deleteList = id => dispatch => {
  return (
    APIUtil.deleteList(id)
    .then(resp => resp.json())
    .then(json => dispatch(removeList(json))));
};


export const removeList = list => ({
  type: REMOVE_LIST,
  list
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveAllLists = lists => {
  return ({
  type: RECEIVE_ALL_LISTS,
  lists
  });
};

export const receiveErrors = errors => ({

  type: RECEIVE_ERRORS,
  errors
});
