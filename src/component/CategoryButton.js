import React from "react";

function CategoryButton({ label, category, selectedCategory, onSelect, style }) {
  return (
    <button
      onClick={() => onSelect(category)}
      style={{
        ...style,
        border: "1px solid black",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        backgroundColor:
          selectedCategory === category ? style.backgroundColor : "white",
      }}
    >
      {label}
    </button>
  );
}

export default CategoryButton;
