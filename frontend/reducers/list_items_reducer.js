import {
  RECEIVE_ALL_LIST_ITEMS,
  RECEIVE_LIST_ITEM
} from '../actions/list_item_actions';
import merge from 'lodash/merge';

const listItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_LIST_ITEMS:
      return action.listItems;
    case RECEIVE_LIST_ITEM:
      return merge({}, oldState, {
        [action.listItem.id]: action.listItem
      })
    default:
      return oldState;
  }
};

export default listItemsReducer;
