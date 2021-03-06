import {RECEIVE_ALL_LISTS,RECEIVE_LIST, REMOVE_LIST} from '../actions/list_actions';
import merge from 'lodash/merge';

const listsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, oldState, {
        [action.list.id]: action.list
      })
    case REMOVE_LIST:
      let newState = merge({}, oldState);
      delete newState[action.listId];
      return newState;
    default:
      return oldState;
  }
};

export default listsReducer;
