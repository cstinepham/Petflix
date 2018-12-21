import * as ListItemAPIUtil from '../util/list_items_api_util';

export const RECEIVE_ALL_LIST_ITEMS = 'RECEIVE_ALL_LIST_ITEMS';
export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';

export const receiveListItems = (listItems) => ({
  type: RECEIVE_ALL_LIST_ITEMS,
  listItems
});


export const receiveListItem = (listItem) => ({
  type: RECEIVE_LIST_ITEM,
  listItem
});

export const fetchListItem = (id) => dispatch => (
  ListItemAPIUtil.fetchListItem(id)
  .then(listItem => dispatch(receiveListItem(listItem)))
);

export const fetchListItems = () => dispatch => (
  ListItemAPIUtil.fetchListItems()
  .then(listItems => dispatch(receiveListItems(listItems)))
);


export const createListItem = (listItem) => dispatch => (
  ListItemAPIUtil.createListItem(listItem)
  .then(listItem => dispatch(receiveListItem(listItem)))
)