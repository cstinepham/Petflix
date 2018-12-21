import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import moviesReducer from './movies_reducer';
import listsReducer from './lists_reducer';
import listItemsReducer from './list_items_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  lists: listsReducer,
  listItems: listItemsReducer
});

export default entitiesReducer;