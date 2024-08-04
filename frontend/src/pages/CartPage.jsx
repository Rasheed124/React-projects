import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

import {
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useRemoveFromCartMutation,
} from '../services/appApi';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe(
  'pk_test_51PjvUk09KkE9U3JI8o1tG5LxWgdy71TTcyk9vXuO7if4JcrbcBqj2IHvmveL76oBcAfmITh0dRNzoJL8ZupwYVxg00S3Ir5e1t',
);

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const userCartObj = user.cart;
  let cart = products.filter((product) => userCartObj[product._id] != null);
  const [increaseCart] = useIncreaseCartProductMutation();
  const [decreaseCart] = useDecreaseCartProductMutation();
  const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

  function handleDecrease(product) {
    const quantity = user.cart.count;
    if (quantity <= 0) return alert("Can't proceed");
    decreaseCart(product);
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="h-lvh overflow-hidden bg-gray-300 ">
          <div className="pt-28 flex flex-col justify-center items-center">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
              <div className="empty-cart-container w-5/12">
                <h2 className="text-[1rem] pb-2 text-center">
                  Your cart is empty.
                </h2>
                <div>
                  <a href="/">
                    <button className="bg-gray-800 text-gray-300 py-2 px-7 rounded-md w-full">
                      Start shopping
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="items grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 overflow-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="w-fit">
                      <div className="shadow-2xl h-[12rem] grid grid-cols-2 relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-[192px] w-fit"
                        />
                        <div className="rounded-tr-lg bg-gray-500 px-3 py-3">
                          <h3 className="text-[.9rem] pb-2">{item.name}</h3>
                          <ul className="list-disc pl-4">
                            {item.features.map((feature, index) => (
                              <li key={index} className="">
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <p className="absolute bottom-4">₦{item.new_price}</p>
                          <p className="absolute bottom-4">
                            ₦{item.price * user.cart[item._id]}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-br-lg py-2 px-3 grid grid-cols-2 bg-gray-900">
                        <div className="text-white pt-1 flex items-center gap-2">
                          {!isLoading && (
                            <button
                              onClick={() =>
                                removeFromCart({
                                  productId: item._id,
                                  price: item.new_price,
                                  userId: user._id,
                                })
                              }
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <div className="quantity flex items-center">
                          <div className="w-12 h-8 bg-gray-400 rounded-md text-center">
                            <button
                              onClick={() =>
                                handleDecrease({
                                  productId: item._id,
                                  price: item.new_price,
                                  userId: user._id,
                                })
                              }
                              className="border border-gray-800 w-full h-full text-[1.2rem]"
                            >
                              -
                            </button>
                          </div>
                          <span className="w-full text-center text-gray-200">
                            Quantity
                          </span>
                          <div className="w-12 h-8 bg-gray-200 rounded-md text-center">
                            <button
                              onClick={() =>
                                increaseCart({
                                  productId: item._id,
                                  price: item.new_price,
                                  userId: user._id,
                                })
                              }
                              className="border border-gray-800 w-full h-full text-[1.2rem]"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-100 sticky bottom-0 px-3 py-2 shadow-lg">
          <Link to={'/delivery'}>
            <button className="bg-gray-800 py-2 w-full rounded-md text-gray-100">
              <p>Checkout ₦ {user.cart.total}</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
