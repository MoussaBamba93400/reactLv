// src/components/BookCard.js
import React, { useState, useContext } from 'react';
import '../css/BookCard.css';
import BookDetail from './BookDetail';
import { CartContext } from '../contexts/CartContext';

function BookCard({ name, authors, released, apiUrl }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="book-card">
      <div onClick={handleOpen}>
        <h2>{name}</h2>
        <p><strong>Author:</strong> {authors.join(', ')}</p>
        <p><strong>Released:</strong> {new Date(released).toLocaleDateString()}</p>
      </div>
      <button onClick={() => addToCart({ name, authors, released, apiUrl })}>
        Add to Cart
      </button>
      <BookDetail
        name={name}
        authors={authors}
        released={released}
        apiUrl={apiUrl}
        open={modalOpen}
        onClose={handleClose}
      />
    </div>
  );
}

export default BookCard;
