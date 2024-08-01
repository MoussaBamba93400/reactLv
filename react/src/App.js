// src/App.js
import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import books from './books.json';
import Cart from './components/Cart';
import CartDetails from './components/CartDetails';
import { CartProvider } from './contexts/CartContext';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <CartProvider>
      <div className="App">
        <h1>List of Books</h1>
        <input
          type="text"
          placeholder="Search for a book"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <BookList books={books} searchQuery={searchQuery} />
        <Cart />
        <CartDetails />
      </div>
    </CartProvider>
  );
}

export default App;
