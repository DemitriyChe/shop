import updateCart from "./cart";
import updateItemList from "./items";

const reducer = (state, action) => {
  return {
    cart: updateCart(state, action),
    itemList: updateItemList(state, action)
  }
};

export default reducer;