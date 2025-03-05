import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-400 to-red-600">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-3xl font-bold text-red-400 mb-4">Oops! An Error Occurred</h3>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <button
          onClick={() => navigate(-1)} // Go back to previous page
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate('/')} // Go to homepage
          className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}

export default Error;