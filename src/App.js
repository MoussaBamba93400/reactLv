// src/App.js
import React, {useState} from "react";
import "./App.css";
import BookList from "./components/BookList";
import books from "./books.json";
import Cart from './components/Cart';
import CartDetails from './components/CartDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (book) => {

    if (cart.find((cartBook) => cartBook.name === book.name)) {
      return;
    }

    setCart([...cart, book]);
  };

  const removeFromCart = (bookToRemove) => {
    console.log("Removing book from cart", bookToRemove);
    setCart(cart.filter(book => book.name !== bookToRemove.name));
  };

  return (
    <div className="App">
      <h1>List of Books</h1>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <BookList books={books} searchQuery={searchQuery} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <CartDetails cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
export default App;
