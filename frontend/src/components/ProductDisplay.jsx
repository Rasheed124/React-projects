import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";
import { ProductContext } from "../Context/ProductContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ProductContext);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-800">
        <div className="pt-24 lg:pt-32">
          <div className="bg-gray-300 px-3 flex flex-col pt-6 pb-6 lg:pb-20 lg:rounded-t-lg md:px-6 lg:max-w-[900px] m-auto md:gap-10 md:flex-row">
            <div className="max-w-[400px] m-auto md:hidden pb-3">
              <div className="relative overflow-auto max-h-[300px] custom-scrollbar">
                <div className="flex max-w-[1200px] gap-3 pt-4">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-[250px] h-[250px]"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[300px] hidden md:block pb-10 relative">
              <img
                src={product.image}
                alt="product"
                className="w-[250px] h-[250px]"
              />
            </div>
            <div className="md:pt-3 max-w-[400px] m-auto md:m-0">
              <p className="text-[0.9rem]">
                Static description text here...
                <button className="text-blue-600 hover:text-blue-800">
                  Show More
                  {/* <MdKeyboardArrowRight /> */}
                </button>
              </p>
              <p className="text-[0.9rem] pt-1">{product.name}</p>
              <p className="text-[1.2rem] text-gray-800 pt-1 font-bold">
                Static Price
              </p>
              <p className="text-[0.9rem] pt-1">Stock Status</p>
              <p className="text-[0.9rem] pt-1">Delivery Info</p>
              <p className="text-[0.9rem] pt-1">
                Category : {product.category}
              </p>
              <div className="hidden md:block pt-6 relative">
                <button
                  onClick={() => {
                    addToCart(product.id);
                  }}
                  className="bg-gray-800 text-white py-2 w-full rounded-md"
                >
                  ADD TO CART
                </button>
                {/* <BsFillCartPlusFill className="absolute top-8 left-12 text-gray-200 text-[1.3rem]" /> */}
              </div>
            </div>
          </div>
          <div className="bg-gray-300 lg:bg-gray-800 pt-2">
            <div className="lg:max-w-[900px] m-auto bg-gray-800 lg:bg-gray-600 py-2 px-4">
              <h2 className="text-gray-200">PRODUCT DETAILS</h2>
            </div>
            <div className="px-3 lg:px-0 lg:max-w-[900px] m-auto pt-2 pb-3 lg:pt-0">
              <ul className="bg-gray-300 shadow-2xl shadow-slate-700 mt-1 lg:mt-0 pb-12">
                <li className="py-2 description">
                  <p className="text-[1.2rem] flex items-center border-b pl-4 border-gray-700 pb-2 justify-between px-3 cursor-pointer">
                    Description
                    {/* <MdKeyboardArrowRight /> */}
                  </p>
                  <div className="px-5 pt-3">
                    <p className="text-[0.9rem] pt-1">
                    <div>
                     
                     {/* Description */}
                      <div >
                        <h2 className="text-[1rem] font-bold pt-5 pb-2">
                        Description
                        </h2>
                        <ul className="list-disc space-y-1 pl-6 ">
                        
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                        
                        </ul>
                      </div>
                     {/* Lightining */}
                      <div >
                        <h2 className="text-[1rem] font-bold pt-5 pb-2">
                        Lightining
                        </h2>
                        <ul className="list-disc space-y-1 pl-6 ">
                        
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                        
                        </ul>
                      </div>
                      {/* What's in the box*/}
                      <div >
                        <h2 className="text-[1rem] font-bold pt-5 pb-2">
                        What's in the box
                        </h2>
                        <ul className="list-disc space-y-1 pl-6 ">
                        
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                        
                        </ul>
                      </div>
                      {/* Key Features */}
                      <div >
                        <h2 className="text-[1rem] font-bold pt-5 pb-2">
                        Key Features
                        </h2>
                        <ul className="list-disc space-y-1 pl-6 ">
                        
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                            <li  className="text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                            </li>
                        
                        </ul>
                      </div>
                   {/* Specifications */}
                       <div >
                          <h2 className="text-[1rem] font-bold pt-5 pb-2">
                          Specifications
                          </h2>
                          <ul className="list-disc space-y-1 pl-6 ">
                          
                              <li  className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                              </li>
                              <li  className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                              </li>
                              <li  className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                              </li>
                          
                          </ul>
                        </div>
                      </div>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Product */}
          <RelatedProduct />

          <div className="md:hidden relative small sticky-button-container flex gap-4 items-center shadow-[3rem] border-gray-700 ">
            <div className="w-12 h-10">
              {/* <FaPhoneAlt className="border border-gray-800 rounded-md w-full h-full py-2 text-[1rem]" /> */}
            </div>
            <button className="bg-gray-800 text-white py-2 w-full rounded-md">
              ADD TO CART
            </button>
            {/* <BsFillCartPlusFill className="absolute top-4 left-24 text-gray-200 text-[1.3rem]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
