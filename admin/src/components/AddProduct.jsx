import React, { useState } from "react";

import upload_area from "../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    features: "",
    brand: "",
  });

  const imagHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const Add_Product = async () => {
    const featuresArray = productDetails.features.split(",").map((feature) => feature.trim());
    const product = { ...productDetails, features: featuresArray };

    console.log(product);

    let responseData;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload/upload", {
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
      console.log(product);

      await fetch("http://localhost:4000/products/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <>
      <section className="bg-gray-100 text-black/60">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <div>
                <label htmlFor="name">Product Title</label>
                <input
                  className="w-full text-black rounded-lg border-gray-200 p-3"
                  placeholder="Type here"
                  type="text"
                  name="name"
                  value={productDetails.name}
                  onChange={changeHandler}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 space-y-3">
                <div>
                  <label htmlFor="old_price">New Price</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Type here"
                    type="number"
                    name="old_price"
                    value={productDetails.old_price}
                    onChange={changeHandler}
                  />
                </div>

                <div>
                  <label htmlFor="new_price">Offer Price</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Type here"
                    type="number"
                    name="new_price"
                    value={productDetails.new_price}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                  Product Category
                </label>
                <select
                  name="category"
                  className="mt-1.5 mb-3 w-full rounded-lg border-black text-gray-700 sm:text-sm"
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

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-900">
                  Brand Name
                </label>
                <input
                  className="w-full text-black rounded-lg border-gray-200 p-3"
                  placeholder="Type here"
                  type="text"
                  name="brand"
                  value={productDetails.brand}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <label htmlFor="features" className="block text-sm font-medium text-gray-900">
                  Features
                </label>
                <textarea
                  className="w-full text-black rounded-lg border-gray-200 p-3"
                  placeholder="Enter features separated by commas"
                  name="features"
                  value={productDetails.features}
                  onChange={changeHandler}
                />
              </div>

              <div className="relative">
                <label htmlFor="image_upload">
                  <img
                    src={image ? URL.createObjectURL(image) : upload_area}
                    alt="image upload"
                  />
                </label>
                <input
                  onChange={imagHandler}
                  type="file"
                  name="image"
                  className="border object-cover"
                />
              </div>

              <div className="mt-4">
                <button
                  className="block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  onClick={Add_Product}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
