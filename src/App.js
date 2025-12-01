import './App.css';
import Header from './Header';
import JobList from './JobList';
import Footer from './Footer';
import TicketInfo from './TicketInfo';
import StatusBoard from './StatusBoard';
import AppForm from './AppForm';
import React, { useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ]);
  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };


  return (
    <div className="app">
      <Header />
      <JobList jobs={jobs} onDeleteJob={handleDeleteJob} />
      <div className='appform-container'>

        <AppForm />
      </div>
      <StatusBoard />
      <Footer />
    </div>
  );
};
export default App;
