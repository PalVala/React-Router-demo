import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4 text-green-600">About Us</h1>
      <p className="text-md text-gray-700 max-w-md text-center">
        We are a passionate team dedicated to providing quality services.
      </p>
    </div>
  );
}

export default About;