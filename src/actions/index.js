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

const itemAddtoCart = (id) => {
  return {
    type: "ITEM_ADD",
    payload: id
  }
};

const itemRemoved = (id) => {
  return {
    type: "ITEM_REMOVE",
    payload: id
  }
};

const itemDeleted = (id) => {
  return {
    type: "ITEM_DELETE",
    payload: id
  }
};

const fetchItems = (itemService, dispatch) => () => {
  dispatch(itemsRequested());
  itemService.getItems()
    .then((data) => dispatch(itemsLoaded((data))))
    .catch((error) => dispatch(itemsError(error)))
};

export {
  fetchItems,
  itemAddtoCart,
  itemDeleted,
  itemRemoved
};