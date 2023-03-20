import React from "react";
import AddBook from "../components/AddBook";
import NavBar from "../components/NavBar";

const Add = () => {
  return (
    <div>
      <NavBar />
      <main className="py-6 2xl:px-6">
        <AddBook />
      </main>
    </div>
  );
};

export default Add;
