import { RECEIVE_ALL_LISTS,
    RECEIVE_LIST,
    REMOVE_LIST,
    RECEIVE_ERRORS } from '../actions/list_actions';
    import merge from 'lodash/merge';

    const ListsReducer = (state = {}, action) => {
      Object.freeze(state);
      switch(action.type){
        case RECEIVE_ALL_LISTS:
          const lists = action.lists
          return {
            ...state,
            ...lists
          };
        case RECEIVE_LIST:
          return merge({}, state, {[action.list.id]: action.list});
        case REMOVE_LIST:
          let newState = merge({}, state);
          delete newState[action.list.id];
          return newState;
        case RECEIVE_ERRORS:
          return merge({}, state, {errors: action.errors});
        default:
          return state;
      }
    };

export default ListsReducer;
