import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

    fetch(`${API_BASE_URL}/api/endpoint`)  // Substitua '/api/endpoint' pelo endpoint correto
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;
