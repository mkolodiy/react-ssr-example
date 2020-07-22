import React, { useState } from 'react';
import { useGetJobs } from './hooks/useGetJobs';
import Jobs from './components/Jobs';
import { Container } from 'react-bootstrap';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useGetJobs(params, page);

  return (
    <Container>
      <Jobs jobs={jobs} loading={loading} error={error} />
    </Container>
  );
}

export default App;
