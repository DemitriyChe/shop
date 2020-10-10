const updateItemList = (state, action) => {
  if (state === undefined) {
    return {
      items: [],
      loading: true,
      error: null
    }
  }
};

export default updateItemList;