const updateItemList = (state, action) => {
  if (state === undefined) {
    return {
      items: [],
      loading: true,
      error: null
    }
  }
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        items: [],
        loading: true,
        error: null,
      };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        items: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_ITEMS_ERROR':
      return {
        items: [],
        loading: false,
        error: action.payload
      };
    case 'ITEM_LIKED':
      return {
        items: updateItem(state, action.payload),
        loading: false,
        error: null
      };
    default:
      return state.itemList;
  }
};

const updateItem = (state, itemId) => {
  const { itemList: {items} } = state;
  const idx = items.findIndex(({id}) => id === itemId);
  const newItem = items[idx];
  newItem.isliked = !newItem.isliked;
  return [
    ...items.slice(0, idx),
    newItem,
    ...items.slice(idx + 1)
  ];
};

export default updateItemList;