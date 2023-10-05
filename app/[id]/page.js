'use client'
import React, { useState, useEffect } from 'react';

export default function Page({ params }) {
  // Access the 'id' prop from the 'params' object
  const id = params.id;

  // State to store the data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await getDataDetails(id);
        setData(response);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Id: {id}</p>
      <p>FirstName: {data.firstName}</p>
      <p>LastName: {data.lastName}</p>
      {/* Render other data properties as needed */}
    </div>
  );
}

async function getDataDetails(id) {
  const res = await fetch(`https://64e7bf5db0fd9648b7904d83.mockapi.io/fakeData/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
