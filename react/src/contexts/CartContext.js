// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (cart.find((cartBook) => cartBook.name === book.name)) {
      return;
    }
    setCart([...cart, book]);
  };

  const removeFromCart = (bookToRemove) => {
    setCart(cart.filter((book) => book.name !== bookToRemove.name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
