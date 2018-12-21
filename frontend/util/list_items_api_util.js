export const fetchListItems = () => (
  $.ajax({
    method: 'GET',
    url: 'api/list_items'
  })
);


export const fetchListItem = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/lists_items/${id}`,

  })
);

export const createListItem = (listItem) => (
  $.ajax({
    method: 'POST',
    url: `api/list_items`,
    data: {
      listItem
    }
  })
);
