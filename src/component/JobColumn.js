import React from "react";

function JobColumn({ title, image, jobs }) {
  return (
    <div className="job-column">
      <div className="job-column-header">
        <img src={image} alt={title} className="job-column-icon" />
        <h2>{title}</h2>
      </div>

      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job-item">
              {job.title}
            </div>
          ))
        ) : (
          <p className="empty-message">No jobs here yet</p>
        )}
      </div>
    </div>
  );
}

export default JobColumn;