const updateCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      total: 0
    }
  }
};

export default updateCart;