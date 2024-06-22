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
  });

  const imagHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // const changeHandler = (e) => {
  //   setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  // };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const Add_Product = async () => {
    console.log(productDetails);

    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
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
    }
  };

  return (
    <>
      <section class="bg-gray-100 text-black/60">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 ">
            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              {/* <form action="#" class="space-y-4"> */}
              <div>
                <label class="" for="name">
                  Product TItle
                </label>
                <input
                  class="w-full text-black rounded-lg border-gray-200 p-3 "
                  placeholder="Type here"
                  type="text"
                  name="name"
                  value={productDetails.name}
                  onChange={changeHandler}
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="" for="email">
                    New Price
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Type here"
                    type="number"
                    name="old_price"
                    id="email"
                    value={productDetails.old_price}
                    onChange={changeHandler}
                  />
                </div>

                <div>
                  <label class="" for="phone">
                    Offer Price
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    name="new_price"
                    value={productDetails.new_price}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm font-medium text-gray-900"
                >
                  Product Category
                </label>

                <select
                  name="category"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  value={productDetails.category}
                  onChange={changeHandler}
                >
                  <option value="">Please select</option>
                  <option value="JM">Men</option>
                  <option value="SRV">Women</option>
                  <option value="JH">Kid</option>
                </select>
              </div>

              <div className="relative">
                <label class="" for="image_upload">
                  <img
                    src={image ? URL.createObjectURL(image) : upload_area}
                    alt="image upload"
                  />
                </label>

                <input
                  onChange={imagHandler}
                  type="file"
                  name="image"
                  className="  border object-cover"
                />
              </div>

              <div class="mt-4">
                <button
                  class="block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  onClick={() => {
                    Add_Product();
                  }}
                >
                  ADD
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
