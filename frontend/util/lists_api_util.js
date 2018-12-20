export const fetchLists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/lists'
  })
);


export const fetchList = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/list/${id}`
  })
);

export const createList = (list) => (
  $.ajax({
    method: 'POST',
    url: `api/lists`,
    data: {list}
  })
);



