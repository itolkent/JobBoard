import React from 'react';

const JobItem = ({ job, onDelete }) => {
  return (
    <div className={`job-item ${job.status}`}>
      <span>{job.name} ({job.status})</span>
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  );
};

export default JobItem;
