import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetailPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden">
      <div>
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <Link to="/products" className="text-[#0d171b] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </Link>
          <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Product Details</h2>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg min-h-32 w-32"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#0d171b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{product.name}</p>
                <p className="text-[#4c809a] text-base font-normal leading-normal text-center">{product.category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <Link to={`/product/${product.id}/edit`} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1193d4] text-slate-50 text-base font-bold">
            <span className="truncate">Edit Product</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
