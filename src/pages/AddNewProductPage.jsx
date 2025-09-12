import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AddNewProductPage({ onAddProduct }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      category,
      imageUrl,
    };
    onAddProduct(newProduct);
    navigate('/products');
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden">
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <Link to="/products" className="text-[#0d171b] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </Link>
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight flex-1 text-center pr-12">Add New Product</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <input
              placeholder="Product Name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <input
              placeholder="Category"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <input
              placeholder="Image URL"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] h-14 placeholder:text-[#4c809a] p-4 text-base font-normal leading-normal"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="flex px-4 py-3">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1193d4] text-slate-50 text-base font-bold"
            >
              <span className="truncate">Save Product</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewProductPage;
