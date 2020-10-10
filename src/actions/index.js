const itemsLoaded = (newItems) => {
  return {
    type: "FETCH_ITEMS_SUCCESS",
    payload: newItems
  }
};

const itemsRequested = () => {
  return {
    type: "FETCH_ITEMS_REQUEST"
  }
};

const itemsError = (error) => {
  return {
    type: "FETCH_ITEMS_ERROR",
    payload: error
  }
};

const fetchItems = (itemService, dispatch) => () => {
  dispatch(itemsRequested());
  itemService.getItems()
    .then((data) => dispatch(itemsLoaded((data))))
    .catch((error) => dispatch(itemsError(error)))
};

export default fetchItems;