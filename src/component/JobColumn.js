import React from "react";

function JobColumn({ title, image, jobs, deleteJob, updateJobStatus }) {
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
                            <span>{job.title}</span>

                            <div className="job-actions">
                                <select
                                    value={job.status}
                                    onChange={(e) => updateJobStatus(job.id, e.target.value)}
                                >
                                    <option value="Need to Start">Need to Start</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteJob(job.id)}
                                >
                                    ✕
                                </button>
                            </div>
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