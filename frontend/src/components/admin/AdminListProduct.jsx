import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDeleteProductMutation } from '../../services/appApi';
import { Link } from 'react-router-dom';

// import cross_icon from "../assets/cross_icon.png";

// const API_URL = import.meta.env.VITE_BACKEND_APP_URL;

const AdminListProduct = () => {
    const products = useSelector((state) => state.products);


    console.log(products);
    
    const user = useSelector((state) => state.user);
    // removing the product
    // const [deletProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
    // function handleDeleteProduct(id) {
    //     // logic here
    //     if (window.confirm("Are you sure?")) deletProduct({ product_id: id, user_id: user._id });
    // }

  return (
    <div>
      <h2 className="text-center  p-5">All Products</h2>
      <hr />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product, index) => (
              <tr key={index}>
                <td className="flex justify-center items-center px-4 py-2 font-medium text-gray-900">
                  <img
                    className="w-10 h-10"
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product._id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  ${product.new_price}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href="#"
                    className="rounded flex justify-center items-center px-4 py-2 text-xs font-medium text-white"
                  >
                    <button className="p-3 bg-red-400 text-white">
                      Delete
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    href="#"
                    className="rounded flex justify-center items-center px-4 py-2 text-xs font-medium text-white"
                  >
                    <button className="p-3 bg-green-400 text-white">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminListProduct;
