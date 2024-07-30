// src/BookList.js
import React from 'react';
import books from '../books.json';
import BookCard from './BookCard';
import '../css/BookList.css';

function BookList() {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard 
          key={book.isbn} 
          name={book.name} 
          authors={book.authors} 
          released={book.released} 
        />
      ))}
    </div>
  );
}

export default BookList;
