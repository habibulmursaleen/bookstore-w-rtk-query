import React from "react";
import { useParams } from "react-router-dom";
import EditBook from "../components/EditBook";
import NavBar from "../components/NavBar";
import Error from "../components/ui/Error";
import { useGetBookQuery } from "../features/api/apiSlice";

const Add = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && book?.id) {
    content = <EditBook book={book} />;
  }

  return (
    <div>
      <NavBar />
      <main className="py-6 2xl:px-6">{content}</main>
    </div>
  );
};

export default Add;
