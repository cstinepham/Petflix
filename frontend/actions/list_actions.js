import * as ListAPIUtil from '../util/lists_api_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

export const receiveLists = (lists) => ({
  type: RECEIVE_ALL_LISTS,
  lists
});


export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list
});

export const fetchList = id => dispatch => (
  ListAPIUtil.fetchList(id)
  .then(list => dispatch(receiveList(list)))
);

export const fetchLists = () => dispatch => (
  ListAPIUtil.fetchLists()
  .then(lists => dispatch(receiveLists(lists)))
);


export const createList = (list) => dispatch => (
  ListAPIUtil.createList(list)
  .then(list => dispatch(receiveList(list)))
)