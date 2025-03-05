import React from 'react';

function Start() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-green-600">Let's Get Started!</h1>
      <p className="text-lg text-gray-700 mb-6">You're on your way to amazing things.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Start;