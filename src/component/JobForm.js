import React, { useState } from "react";

function JobForm({ addNewJob }) {
  const initialState = {
    title: "",
    description: "",
    status: "Need to Start",
  };

  const [jobDetails, setJobDetails] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 1. Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };

  // 2. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!jobDetails.title || !jobDetails.description || !jobDetails.status) {
      setError("All fields must be filled!");
      return;
    }
    if (jobDetails.title.length < 3) {
      setError("Job title must be at least 3 characters long.");
      return;
    }

    // Log details to console
    console.log("Job Details Submitted:", jobDetails);

    // Add job to parent state
    addNewJob(jobDetails);

    // Reset form
    setJobDetails(initialState);
    setSuccess("Job added successfully!");
  };

  // 4. Reset form manually
  const resetForm = () => {
    setJobDetails(initialState);
    setError("");
    setSuccess("");
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Job Title"
      />

      <textarea
        name="description"
        value={jobDetails.description}
        onChange={handleInputChange}
        placeholder="Job Description"
      />

      <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
      >
        <option value="Need to Start">Need to Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button
        type="submit"
        disabled={
          !jobDetails.title || !jobDetails.description || !jobDetails.status
        }
      >
        Add Job
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </form>
  );
}

export default JobForm;

