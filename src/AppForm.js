import React, { useState } from "react";
import JobColumn from "./component/JobColumn";
// sample icons
import startIcon from "./img/itol.png";
import progressIcon from "./img/itol.png";
import completedIcon from "./img/itol.png";
import JobForm from "./component/JobForm";
function AppForm() {
    const [jobs, setJobs] = useState([
        { id: 1, title: "Design homepage", status: "Need to Start" },
        { id: 2, title: "Build login form", status: "In Progress" },
        { id: 3, title: "Deploy to server", status: "Completed" },
    ]);
    //  Delete job
    const deleteJob = (id) => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    };

    // Update job status
    const updateJobStatus = (id, newStatus) => {
        setJobs((prevJobs) =>
            prevJobs.map((job) =>
                job.id === id ? { ...job, status: newStatus } : job
            )
        );
    };

    //  Add new job
    const addNewJob = (jobDetails) => {
        const newJob = {
            id: Date.now(),
            ...jobDetails,
        };
        setJobs((prev) => [...prev, newJob]);
    };



    // Filter jobs by status
    const needToStartJobs = jobs.filter((job) => job.status === "Need to Start");
    const inProgressJobs = jobs.filter((job) => job.status === "In Progress");
    const completedJobs = jobs.filter((job) => job.status === "Completed");


    return (
        <div>
            <div className="app-container">
                <JobForm addNewJob={addNewJob} />

                <div className="columns">
                    <JobColumn
                        title="Need to Start"
                        image={startIcon}
                        jobs={needToStartJobs}
                        deleteJob={deleteJob}
                        updateJobStatus={updateJobStatus}
                    />
                    <JobColumn
                        title="In Progress"
                        image={progressIcon}
                        jobs={inProgressJobs}
                        deleteJob={deleteJob}
                        updateJobStatus={updateJobStatus}
                    />
                    <JobColumn
                        title="Completed"
                        image={completedIcon}
                        jobs={completedJobs}
                        deleteJob={deleteJob}
                        updateJobStatus={updateJobStatus}
                    />
                </div>

                <JobColumn title="Need to Start" image={startIcon} jobs={needToStartJobs} />
                <JobColumn title="In Progress" image={progressIcon} jobs={inProgressJobs} />
                <JobColumn title="Completed" image={completedIcon} jobs={completedJobs} />
            </div>
            <form className="form-header">
                <input type="text" className="bot-input" placeholder="Enter job title..." />

                <div className="form-details">
                    <div className="bottom-line">
                        <button type="button" className="tag">Frontend</button>
                        <button type="button" className="tag">Backend</button>
                        <button type="button" className="tag">Fullstack</button>
                    </div>

                    <select className="job-status">
                        <option value="">Select status</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>

                <button type="submit" className="submit-data">Submit</button>
            </form>
        </div>

    );
}

export default AppForm;
