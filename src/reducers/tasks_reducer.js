import { RECEIVE_ALL_TASKS,
    RECEIVE_TASK,
    REMOVE_TASK,
    RECEIVE_ERRORS } from '../actions/task_action';
    import merge from 'lodash/merge';

    const TasksReducer = (state = {}, action) => {
      Object.freeze(state);
      switch(action.type){
        case RECEIVE_ALL_TASKS:
        const tasks = action.tasks
          return {
          ...tasks
        };
        case RECEIVE_TASK:
          return merge({}, state, {[action.task.id]: action.task});
        case REMOVE_TASK:
          let newState = merge({}, state);
          delete newState[action.task.id];
          return newState;
        case RECEIVE_ERRORS:
          return merge({}, state, {errors: action.errors});
        default:
          return state;
      }
    };

export default TasksReducer;
