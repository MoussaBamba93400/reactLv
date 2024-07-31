import React from 'react';
import '../css/cart.css';

function CartDetails({ cart, removeFromCart }) {
  return (
    <div className="cart-details">
      <h2>Cart Details</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(book => (
            <li key={book.apiUrl}>
              <div>
                <h3>{book.name}</h3>
                <p><strong>Author:</strong> {book.authors.join(', ')}</p>
                <p><strong>Released:</strong> {new Date(book.released).toLocaleDateString()}</p>
              </div>
              <button onClick={() => removeFromCart(book)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartDetails;
