import React from "react";

const Filters = ({ categories, filter, setFilter }) => {
  return (
    <ul className="filters_menu">
      {categories.map((cat) => (
        <li
          key={cat}
          className={filter === cat ? "active" : ""}
          onClick={() => setFilter(cat)}
          style={{ cursor: "pointer" }}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
