import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import "../../styles/style.css";
import Error from "../ui/Error";
import SingleBook from "./SingleBook";

const BookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const { filter, search } = useSelector((state) => state.filter);

  const filterByStatus = (book) => {
    switch (filter) {
      case "Featured":
        return book.featured;

      default:
        return true;
    }
  };
  const filterBySearch = (book) => {
    if (search?.length > 0) {
      return book.name.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  // decide what to render
  let content = null;

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No books found!" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter(filterByStatus)
      .filter(filterBySearch)
      .map((book) => <SingleBook key={book.id} book={book} />);
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default BookList;
