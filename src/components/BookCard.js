import React, { useState, useEffect } from "react";
import "../css/BookCard.css";
import BookDetail from "./BookDetail";

function BookCard({ name, authors, released, apiUrl, addToCart }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log("Modal state changed:", modalOpen ? "Opening" : "Closing");
  }, [modalOpen]);

  const handleOpen = () => {
    setModalOpen(true);
    console.log("Modal opened", modalOpen);
  };

  const handleClose = () => {
    setModalOpen(false);
    console.log("Modal closed", modalOpen);
  };

  return (
    <div className="book-card">
      <div onClick={handleOpen}>
        <h2>{name}</h2>
        <p>
          <strong>Author:</strong> {authors.join(", ")}
        </p>
        <p>
          <strong>Released:</strong> {new Date(released).toLocaleDateString()}
        </p>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
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
