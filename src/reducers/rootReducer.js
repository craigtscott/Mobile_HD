import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import ListsReducer from './lists_reducer';
import TasksReducer from './tasks_reducer';

export default combineReducers({
  session: sessionReducer,
  lists: ListsReducer,
  tasks: TasksReducer

});
