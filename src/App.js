import './App.css';
import Header from './Header';
import JobList from './JobList';
import Footer from './Footer';

function App() {
 const jobs = [
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ];

  return (
    <div className="app">
      <Header />
      <JobList jobs={jobs} />
      <Footer />
    </div>
  );
};
export default App;
