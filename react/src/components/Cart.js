// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((book, key) => (
            <li key={key}>
              <span>{book.name}</span>
              <button onClick={() => removeFromCart(book)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
