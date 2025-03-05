import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Jobdetail() {
  const detail = useLoaderData();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{detail.title}</h2>
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-gray-700 font-medium">Company:</p>
          <p className="text-gray-600">{detail.company}</p>
        </div>
        <div>
          <p className="text-gray-700 font-medium">Location:</p>
          <p className="text-gray-600">{detail.location}</p>
        </div>
      </div>
      <p className="text-gray-700 font-medium mb-2">Description:</p>
      <p className="text-gray-600 mb-3">{detail.description}</p>
      <p className="text-gray-700 font-medium">Salary:</p>
      <p className="text-gray-600 mb-4">{detail.salary}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Apply Now
      </button>
    </div>
  );
}

export default Jobdetail;

export const detailloader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/job/${id}`);
  if (!res.ok) {
    throw Error('Could not find job detail');
  }
  return res.json();
};