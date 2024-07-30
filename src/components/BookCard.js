// src/BookCard.js
import React from 'react';
import '../css/BookCard.css';

function BookCard({ name, authors, released }) {
  return (
    <div className="book-card">
      <h2>{name}</h2>
      <p><strong>Author:</strong> {authors.join(', ')}</p>
      <p><strong>Released:</strong> {new Date(released).toLocaleDateString()}</p>
    </div>
  );
}

export default BookCard;
