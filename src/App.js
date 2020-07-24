import React, { useState } from 'react';
import { useGetJobs } from './hooks/useGetJobs';
import Jobs from './components/Jobs';
import { Container } from 'react-bootstrap';
import JobsPagination from './components/JobsPagination';
import Search from './components/Search';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useGetJobs(params, page);

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => ({ ...prevParams, [param]: value }));
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHubJobs</h1>
      <Search params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      <Jobs jobs={jobs} loading={loading} error={error} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
