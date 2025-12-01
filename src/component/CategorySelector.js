import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

function CategorySelector() {
  // Task 2: Define category styles
  const categoryStyles = {
    readEmails: { backgroundColor: "orange" },
    sendEmails: { backgroundColor: "yellow" },
    webParsing: { backgroundColor: "blue" },
    default: { backgroundColor: "white" },
  };

  // Task 3: State for selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Task 4: Validate category
  const validateCategory = () => selectedCategory !== "";

  // Task 6: Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Bonus 1: Reset category
  const resetCategory = () => {
    setSelectedCategory("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Category Selector</h2>

      {/* Task 5: Render buttons */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <CategoryButton
          label="Read Emails"
          category="readEmails"
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
          style={categoryStyles.readEmails}
        />

        <CategoryButton
          label="Send Emails"
          category="sendEmails"
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
          style={categoryStyles.sendEmails}
        />

        <CategoryButton
          label="Web Parsing"
          category="webParsing"
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
          style={categoryStyles.webParsing}
        />
      </div>

      {/* Bonus 1: Reset button */}
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={resetCategory}
          style={{
            border: "1px solid black",
            padding: "0.5rem 1rem",
            backgroundColor: "#ccc",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      {/* Task 7 & 8: Display selected category */}
      <div style={{ marginTop: "1rem" }}>
        <p>
          {validateCategory()
            ? `Selected Category: ${selectedCategory}`
            : "No category selected"}
        </p>
      </div>
    </div>
  );
}

export default CategorySelector;
