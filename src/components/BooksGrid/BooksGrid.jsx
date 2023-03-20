import React from "react";
import "../../styles/style.css";
import BookList from "./BookList";
import Header from "./Header";

const BooksGrid = () => {
  return (
    <div className="order-2 xl:-order-1">
      <Header />
      <BookList />
    </div>
  );
};

export default BooksGrid;
