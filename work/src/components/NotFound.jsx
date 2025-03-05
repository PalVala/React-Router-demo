// NotFound.js (or 404.js)
import React from 'react';
import {useNavigate} from 'react-router-dom';


function NotFound() {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
      <p className="text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button onClick={()=>{navigate('/')}} className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Home
      </button>
    </div>
  );
}

export default NotFound;