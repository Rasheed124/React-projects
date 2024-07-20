import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "./Navbar";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart , addToCart} = useContext(ProductContext);

  console.log(cartItems);
  return (
    <>
      <div>
        <Navbar />
        <div className="h-lvh overflow-auto bg-gray-300">
          <div className="pt-28 flex flex-col justify-center items-center">
            {/* Empty Cart Container */}
            {/* <div className="empty-cart-container">
              <h2 className="text-[1rem] pb-2 text-center">
                Your cart is empty.
              </h2>
              <div>
                <a href="/">
                  <button className="bg-gray-800 text-gray-300 py-2 px-7 rounded-md">
                    Start shopping
                  </button>
                </a>
              </div>
            </div> */}

            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <div className="place-self-start pt-6 pb-10 max-w-[1200px] m-auto">
                    <div className="items grid md:grid-cols-2 lg:grid-cols-3  gap-4 px-3 overflow-auto">
                      <div className="w-fit">
                        {/* <Link to="/description/itemId"> */}
                        <div className="shadow-2xl h-[12rem] grid grid-cols-2 relative">
                          <img
                            src={e.image}
                            alt=""
                            className="h-[192px] w-fit"
                          />
                          <div className="rounded-tr-lg bg-gray-500 px-3 py-3">
                            <h3 className="text-[.9rem] pb-2">{e.name}</h3>
                            <ul className="list-disc pl-4">
                              {e.features.map((feature, index) => (
                                <li key={index} className="">
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <p className="absolute bottom-4">₦ {e.new_price}</p>
                          </div>
                        </div>
                        {/* </Link> */}
                        <div className="rounded-br-lg py-2 px-3 grid grid-cols-2 bg-gray-900">
                          <div className="text-white pt-1 flex items-center gap-2">
                            {/* <MdDeleteOutline /> */}
                            <button
                              onClick={() => {
                                removeFromCart();
                              }}
                            >
                              Remove
                            </button>
                          </div>
                          <div className="quantity flex items-center">
                            <div className="w-12 h-8 bg-gray-400 rounded-md text-center">
                              <button className="border border-gray-800 w-full h-full text-[1.2rem]" 
                              onClick={() => {
                                removeFromCart();
                              }}
                            
                              >
                                -
                              </button>
                            </div>
                            <span className="w-full text-center text-gray-200">
                              {cartItems[e.id]}
                            </span>
                            <div className="w-12 h-8 bg-gray-200 rounded-md text-center">
                              <button
                              
                              onClick={() => {
                                addToCart();
                              }}
                            
                              className="border border-gray-800 w-full h-full text-[1.2rem]">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Repeat static item blocks as needed */}
                    </div>
                    <div className="bg-gray-100 sticky bottom-0 px-3 py-2 shadow-lg">
                      <button className="bg-gray-800 py-2 w-full rounded-md text-gray-100">
                        <p>Checkout ₦ {e.new_price * cartItems[e.id]}</p>
                      </button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        {/* <div className="bg-gray-100 sticky bottom-0 px-3 py-2 shadow-lg">
          <button className="bg-gray-800 py-2 w-full rounded-md text-gray-100">
            <p>
              {" "}
              Checkout ₦
              {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                  {
                    e.new_price * cartItems[e.id];
                  }
                }
              })}
            </p>
          </button>
        </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default CartItems;
