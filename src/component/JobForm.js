import React, { useState } from "react";

function JobForm({ addNewJob }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    addNewJob(title);
    setTitle("");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new job..."
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
