import React from 'react';

const JobItem = ({ job }) => {
  // Conditional rendering based on job status
  const statusStyle =
    job.status === 'running'
      ? { color: 'green', fontWeight: 'bold' }
      : { color: 'gray', fontStyle: 'italic' };

  return (
    <div className={`job-item ${job.status}`}>
      <h3>{job.name}</h3>
      <p style={statusStyle}>
        Status: {job.status === 'running' ? ' Running' : ' Completed'}
      </p>
    </div>
  );
};

export default JobItem;