import React, { useState } from "react";

function JobForm({ addNewJob }) {
    const initialState = {
        title: "",
        description: "",
        status: "Need to Start",
        categories: [],

    };

    const [jobDetails, setJobDetails] = useState(initialState);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const categoriesList = ["Frontend", "Backend", "Fullstack", "Design", "DevOps"];


    //Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError("");
        setSuccess("");
    };

    // Handle form submission
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

    // Reset form manually
    const resetForm = () => {
        setJobDetails(initialState);
        setError("");
        setSuccess("");
    };
    // Toggle category selection
    const handleCategoryToggle = (category) => {
        setJobDetails((prev) => {
            const alreadySelected = prev.categories.includes(category);
            let updatedCategories;

            if (alreadySelected) {
                updatedCategories = prev.categories.filter((c) => c !== category);
            } else {
                updatedCategories = [...prev.categories, category];
            }

            return { ...prev, categories: updatedCategories };
        });
        setError("");
        setSuccess("");
    };


    // Clear categories
    const clearCategories = () => {
        setJobDetails((prev) => ({ ...prev, categories: [] }));
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
            <div className="categories-container">
                {categoriesList.map((category) => (
                    <button
                        type="button"
                        key={category}
                        className={`category-btn ${jobDetails.categories.includes(category) ? "selected" : ""
                            }`}
                        onClick={() => handleCategoryToggle(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Selected Categories Display */}
            <div className="selected-categories">
                <strong>Selected Categories:</strong>{" "}
                {jobDetails.categories.length > 0
                    ? jobDetails.categories.join(", ")
                    : "None"}
            </div>

            <button type="button" onClick={clearCategories}>
                Clear Categories
            </button>
            <button
                type="submit"
                disabled={
                    !jobDetails.title || !jobDetails.description || !jobDetails.status || jobDetails.categories.length === 0
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

