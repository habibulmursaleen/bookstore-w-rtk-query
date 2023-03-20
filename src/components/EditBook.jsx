import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../components/ui/Error";
import Success from "../components/ui/Success";
import { useEditBookMutation } from "../features/api/apiSlice";
import "../styles/style.css";

const EditBook = ({ book }) => {
  const navigate = useNavigate();

  const {
    id,
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
  } = book;

  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();

  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [price, setPrice] = useState(initialPrice);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);

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
    editBook({
      id,
      data: {
        name,
        price,
        author,
        rating,
        thumbnail,
        featured,
      },
    });
    resetForm();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
        <form onSubmit={handleSubmit} method="POST" className="book-form">
          <div className="space-y-2">
            <label htmlFor="lws-bookName">Book Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
            Edit Book
          </button>
        </form>
      </div>
      {isSuccess && <Success message="Video was edited successfully" />}
      {isError && <Error message="There was an error editing video!" />}
    </div>
  );
};

export default EditBook;
