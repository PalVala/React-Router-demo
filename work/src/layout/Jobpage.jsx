// JobPage.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function JobPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Join Our Team!</h1>
      <p className="text-lg text-gray-700">We're looking for talented individuals to help us grow.</p>
      <Outlet/>
    </div>
  );
}

export default JobPage;