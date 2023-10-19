// ExampleComponent.js
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? <div>Data: {data.title}</div> : <div>Loading...</div>}
    </div>
  );
}

export default ExampleComponent;
