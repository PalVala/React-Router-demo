import React from 'react';

function Product() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4 text-purple-600">Our Products</h1>
      <ul className="list-disc list-inside text-gray-700">
        <li>Product A</li>
        <li>Product B</li>
        <li>Product C</li>
      </ul>
    </div>
  );
}

export default Product;