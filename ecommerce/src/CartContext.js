import React from 'react';

const CartContext = React.createContext({
  cart: {},
  setCart: () => {},
  addToCart: () => {},
});
export default CartContext;