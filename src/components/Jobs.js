import React from 'react';
import Job from './Job';

const Jobs = ({ jobs, loading, error }) => (
  <div>
    {loading && <h1>Loading...</h1>}
    {error && <h1>Error. Try refreshing.</h1>}
    {jobs.map((job) => (
      <Job key={job.id} job={job}></Job>
    ))}
  </div>
);

export default Jobs;
