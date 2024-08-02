import React, { useState } from "react";
import upload_area from "../assets/upload_area.svg";

import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/appApi";

const API_URL = import.meta.env.VITE_BACKEND_APP_URL;

const AddProduct = () => {
  const navigate = useNavigate();
  const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
    features: "",
    deliveryInfo: "",
    stockStatus: "",
    description: {
      description: "",
      lightning: "",
      keyFeatures: "",
      whatsInTheBox: "",
      specifications: "",
    },
  });

  const imagHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const descriptionChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      description: { ...productDetails.description, [name]: value },
    });
  };

  const handleSubmit = async (e) => {

      e.preventDefault();

    const featuresArray = productDetails.features.split(",").map((feature) => feature.trim());
    const description = {
      description: productDetails.description.description.split(",").map(item => item.trim()),
      lightning: productDetails.description.lightning.split(",").map(item => item.trim()),
      keyFeatures: productDetails.description.keyFeatures.split(",").map(item => item.trim()),
      whatsInTheBox: productDetails.description.whatsInTheBox.split(",").map(item => item.trim()),
      specifications: productDetails.description.specifications.split(",").map(item => item.trim()),
    };

    const product = { ...productDetails, features: featuresArray, description: description };

    let responseData;

    let formData = new FormData();
    formData.append("product", image);

    await fetch(`${API_URL}/upload/upload`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;

      createProduct({ ...product }).then(({ data }) => {
        if (data && data.length > 0) {
            setTimeout(() => {
                navigate("/");
            }, 1500);
        }
    });
    }
  };

  return (
    <>
      <section className="bg-gray-100 text-black/60">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8">
            <form className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12" onSubmit={handleSubmit}>

                 {/* Display error message */}
                  {isError && (
                    <div className="mt-4 p-2.5 bg-red-200 text-red-700 rounded-md">
                      {error.data}
                    </div>
                  )}
                  {isSuccess && (
                    <div className="mt-4 p-2.5 bg-green-200 text-green-700 rounded-md">
                     Product created with succcess
                    </div>
                  )}

               

              <div>
                <label htmlFor="name" className="font-bold">Product Title</label>
                <input
                  className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2"
                  placeholder="Type here"
                  type="text"
                  name="name"
                  value={productDetails.name}
                  onChange={changeHandler}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 space-y-3 my-4">
                <div>
                  <label htmlFor="old_price " className="text-gray-900 font-semibold">Old Price</label>
                  <input
                    className="w-full rounded-lg border-gray-400 outline-none border-2 p-3 text-sm"
                    placeholder="Type here"
                    type="number"
                    name="old_price"
                    value={productDetails.old_price}
                    onChange={changeHandler}
                  />
                </div>

                <div className="my-4">
                  <label htmlFor="new_price" className="text-gray-900 font-semibold">New Price</label>
                  <input
                    className="w-full rounded-lg border-gray-400 outline-none border-2 p-3 text-sm"
                    placeholder="Type here"
                    type="number"
                    name="new_price"
                    value={productDetails.new_price}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div className="my-4">
                <label htmlFor="category" className="text-gray-900 font-semibold">Product Category</label>
                <select
                  name="category"
                  className="mt-1.5 mb-3 w-full rounded-lg border-2 p-3 outline-none border-gray-400 text-gray-700 sm:text-sm"
                  value={productDetails.category}
                  onChange={changeHandler}
                >
                  <option value="">Please select</option>
                  <option value="inverter">Inverter</option>
                  <option value="lithium">Lithium</option>
                  <option value="acid">Acid</option>
                  <option value="tubular">Tubular</option>
                  <option value="solar">Solar</option>
                </select>
              </div>

           

              <div className="my-4">
                <label htmlFor="features" className="block text-sm font-medium text-gray-900">
                  Features
                </label>
                <textarea
                  className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                  placeholder="Enter features separated by commas"
                  name="features"
                  value={productDetails.features}
                  onChange={changeHandler}
                />
              </div>

              <div className="my-4">
                <label htmlFor="deliveryInfo" className="block text-sm font-medium text-gray-900">
                  Delivery Info
                </label>
                <textarea
                  className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                  placeholder="Enter delivery information"
                  name="deliveryInfo"
                  value={productDetails.deliveryInfo}
                  onChange={changeHandler}
                />
              </div>

              <div className="my-4">
                <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-900">
                  Stock Status
                </label>
                <input
                  className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3"
                  placeholder="Enter stock status"
                  type="text"
                  name="stockStatus"
                  value={productDetails.stockStatus}
                  onChange={changeHandler}
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="my-4 font-bold">Description Details</h3>

                <div className="border rounded p-3 space-y-4">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                      Description
                    </label>
                    <textarea
                      className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                      placeholder="Enter description separated by commas"
                      name="description"
                      value={productDetails.description.description}
                      onChange={descriptionChangeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="lightning" className="block text-sm font-medium text-gray-900">
                      Lightning
                    </label>
                    <textarea
                      className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                      placeholder="Enter lightning details separated by commas"
                      name="lightning"
                      value={productDetails.description.lightning}
                      onChange={descriptionChangeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="keyFeatures" className="block text-sm font-medium text-gray-900">
                      Key Features
                    </label>
                    <textarea
                      className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                      placeholder="Enter key features separated by commas"
                      name="keyFeatures"
                      value={productDetails.description.keyFeatures}
                      onChange={descriptionChangeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsInTheBox" className="block text-sm font-medium text-gray-900">
                      What's in the Box
                    </label>
                    <textarea
                      className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                      placeholder="Enter contents of the box separated by commas"
                      name="whatsInTheBox"
                      value={productDetails.description.whatsInTheBox}
                      onChange={descriptionChangeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="specifications" className="block text-sm font-medium text-gray-900">
                      Specifications
                    </label>
                    <textarea
                      className="w-full border-2 outline-none text-black rounded-lg border-gray-400 p-3 mt-2 resize-y"
                      placeholder="Enter specifications separated by commas"
                      name="specifications"
                      value={productDetails.description.specifications}
                      onChange={descriptionChangeHandler}
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-4">
                <label htmlFor="image_upload">
                  <img
                    src={image ? URL.createObjectURL(image) : upload_area}
                    alt="image upload"
                  />
                </label>
                <input
                  onChange={imagHandler}
                  type="file"
                  name="image_upload"
                  id="image_upload"
                  className="hidden"
                />
              </div>

              <div className="mt-4">
                <button
                 type="submit" 
                 disabled={isLoading || isSuccess}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                >
                  <span className="font-medium"> Add Product </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
