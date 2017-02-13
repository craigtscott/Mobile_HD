export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import hashHistory from 'react-router';
import * as APIUtil from '../util/task_api_util';


export const fetchAllTasks = (id) => dispatch => {
  return (
  APIUtil.fetchAllTasks(id).then(resp => resp.json())
  .then(json => dispatch(receiveAllTasks(json))));
};

export const fetchTask = id => dispatch => {
  return (
  APIUtil.fetchTasks(id).then(resp => resp.json())
  .then(json => dispatch(receiveTasks(json))));
};

export const searchTasks = query => dispatch => {
  return(
    APIUtil.searchTasks(query).then(task => dispatch(receiveAllTasks(task)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const createTask = task => dispatch => {
  return (
    APIUtil.createTask(task).then(resp => resp.json())
    .then(json => dispatch(receiveTask(json))));
};

export const updateTask = task => dispatch => {
  return (
    APIUtil.updateTask(task).then(resp => resp.json())
    .then(json => dispatch(receiveTask(json))));
};
export const deleteTask = id => dispatch => {
  return (
  APIUtil.deleteTask(id).then(resp => resp.json())
  .then(json => dispatch(removeTask(json))));
};
export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveAllTasks = tasks => {
  return ({
  type: RECEIVE_ALL_TASKS,
  tasks
  });
};

export const receiveErrors = errors => ({

  type: RECEIVE_ERRORS,
  errors
});
