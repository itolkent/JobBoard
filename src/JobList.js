import React from 'react';
import JobItem from './JobItem';
const JobList = ({ jobs, onDeleteJob }) => {
   return (
    <div className="job-list-display">
      <h3>Added Jobs</h3>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> - {job.description} (
              {job.status})
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs added yet.</p>
      )}
    </div>
  );
}

export default JobList;
