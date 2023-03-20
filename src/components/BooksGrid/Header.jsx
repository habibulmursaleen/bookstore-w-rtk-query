import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelected } from "../../features/filter/filterSlice";
import "../../styles/style.css";

const Header = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
  const handleFilterChange = (filterValue) => {
    dispatch(filterSelected(filterValue));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleFilterChange("All")}
          className={`${
            filter === "All" ? "lws-filter-btn active-filter" : "lws-filter-btn"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("Featured")}
          className={`${
            filter === "Featured"
              ? "lws-filter-btn active-filter"
              : "lws-filter-btn"
          }`}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Header;
