import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function Job() {
  const data = useLoaderData();

  if (!data) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (data.error) {
    return <p className="text-center text-red-600 mt-4">Error: {data.error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {data.jobs.map((job) => (
        <Link
          to={`/job/${job.id}`}
          key={job.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h2>
          <p className="text-gray-600 text-sm">{job.company}</p>
        </Link>
      ))}
    </div>
  );
}

export default Job;

export const jobloader = async () => {
  try {
    const res = await fetch('http://localhost:5007/job');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const jobs = await res.json();
    return { jobs };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return { error: error.message };
  }
};