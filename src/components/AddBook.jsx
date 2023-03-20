import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../features/api/apiSlice";
import "../styles/style.css";

const AddBook = () => {
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  console.log(featured);

  const resetForm = () => {
    setName("");
    setAuthor("");
    setPrice("");
    setRating("");
    setThumbnail("");
    setFeatured(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      name,
      price,
      author,
      rating,
      thumbnail,
      featured,
    });
    resetForm();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form method="POST" onSubmit={handleSubmit} className="book-form">
          <div className="space-y-2">
            <label htmlFor="lws-bookName">Book Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-input"
              type="text"
              id="lws-bookName"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-author">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="text-input"
              type="text"
              id="lws-author"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-thumbnail">Image Url</label>
            <input
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              required
              className="text-input"
              type="text"
              id="lws-thumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-price">Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="text-input"
                type="number"
                id="lws-price"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-rating">Rating</label>
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
                className="text-input"
                type="number"
                id="lws-rating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              // value={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              id="lws-featured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
            />
            <label htmlFor="lws-featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="submit"
            id="lws-submit"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
