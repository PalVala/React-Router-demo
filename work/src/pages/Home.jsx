import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome Home!</h1>
      <p className="text-lg text-gray-700">Explore our website and discover great opportunities.</p>
      <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Home;