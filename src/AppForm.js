import React from "react";

function AppForm() {
  return (
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
  );
}

export default AppForm;
