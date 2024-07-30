import React, { useEffect, useState } from "react";
import cross_icon from "../assets/cross_icon.png";

const API_URL = import.meta.env.VITE_BACKEND_APP_URL;

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch(`${API_URL}/products/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`${API_URL}/products/removeproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    await fetchInfo();
  };

  return (
    <div>
      <h2>All Products</h2>
      <hr />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Brand
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Old Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                New Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Features
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Lightning
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Key Features
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                What's in the Box
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Specifications
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Remove
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {allproducts.map((product, index) => (
              <tr key={index}>
                <td className="flex justify-center items-center px-4 py-2 font-medium text-gray-900">
                  <img className="w-10 h-10" src={product.image} alt={product.name} />
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.brand}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  ${product.old_price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  ${product.new_price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.features.join(", ")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {/* {product.description.description.join(", ")} */}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {/* {product.description.lightning.join(", ")} */}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {/* {product.description.keyFeatures.join(", ")} */}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {/* {product.description.whatsInTheBox.join(", ")} */}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {/* {product.description.specifications.join(", ")} */}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="rounded flex justify-center items-center px-4 py-2 text-xs font-medium text-white"
                  >
                    <img
                      onClick={() => remove_product(product.id)}
                      src={cross_icon}
                      alt="Remove"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
