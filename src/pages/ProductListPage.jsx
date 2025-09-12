import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductListPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link to="/products/new" className="text-3xl font-bold text-gray-700">+</Link>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search products"
          className="w-full p-2 pl-10 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>

      <div>
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="flex items-center p-4 mb-2 bg-white rounded-lg shadow">
            <img src={product.imageUrl} alt={product.name} className="w-14 h-14 rounded-lg mr-4" />
            <div>
              <p className="font-bold text-lg">{product.name}</p>
              <p className="text-gray-500">{product.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
