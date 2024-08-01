// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';
import '../css/BookList.css';

function BookList({ books, searchQuery }) {
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book, key) => (
        <BookCard
          key={key}
          name={book.name}
          authors={book.authors}
          released={book.released}
          apiUrl={book.apiUrl}
        />
      ))}
    </div>
  );
}

export default BookList;
