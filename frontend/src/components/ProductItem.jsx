import React, { useContext } from 'react';
import { shopContext } from '../context/ShopContext';

import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, price, name }) => {
  const { currency } = useContext(shopContext);
  return (
    <>
      <Link
        to={`/product/${id}`}
  
        className="group block overflow-hidden"
      >
        <div className="relative h-[350px] sm:h-[450px]">
          <img
            src={image[0]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src={image[0]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">
              {currency}
              {price}
            </p>

            <p className="text-xs uppercase tracking-wide">6 Colors</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
