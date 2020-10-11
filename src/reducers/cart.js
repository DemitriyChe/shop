const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      total: 0
    }
  }
  switch (action.type) {
    default:
      return state.cart
  }
};

export default updateCart;