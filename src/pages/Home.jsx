import React from "react";
import BooksGrid from "../components/BooksGrid/BooksGrid";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="py-12 px-6 2xl:px-6 container">
        <BooksGrid />
      </main>
    </div>
  );
};

export default Home;
