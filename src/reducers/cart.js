const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      total: 0
    }
  }
  switch (action.type) {
    case 'ITEM_ADD':
      return updateOrder(state, action.payload, 1);
    case 'ITEM_REMOVE':
      return updateOrder(state, action.payload, -1);
    case 'ITEM_DELETE':
        const item = state.cart.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -item.count);
    case "CLEAR_CART":
      return {
        cartItems: [],
        total: 0
      };
    default:
      return state.cart
  }
};

const updateOrder = (state, itemId, step) => {
  const { itemList: {items}, cart: {cartItems, total} } = state;
  const item = items.find(({id}) => id === itemId);
  const idx = cartItems.findIndex(({id}) => id === itemId);
  const oldItem = cartItems[idx];
  const newItem = updateCartItem(item, oldItem, step);
  return {
    cartItems: updateCartItems(cartItems, newItem, idx),
    total: total + item.price*step
  };
};

const updateCartItem = (item, oldItem, step) => {
  if (oldItem) {
    return  {
      ...oldItem,
      count: oldItem.count + step,
      total: oldItem.total + (item.price * step)
    }
  } else {
    return  {
      id: item.id,
      name: item.name,
      count: 1,
      total: item.price,
      image: item.image
    }
  }
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ]
};

export default updateCart;