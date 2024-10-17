import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/ShopContext';

import { RiDeleteBin6Line } from 'react-icons/ri';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(shopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartData.map((item, index) => {
                  const productData = products.find(
                    (product) => product._id === item._id,
                  );

                  return (
                    <li className="flex items-center gap-4">
                      <img
                        src={productData.image[0]}
                        alt=""
                        className="size-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          {productData.name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div className="space-x-1">
                            <dt className="inline">Price:</dt>
                            <dd className="inline">
                              {currency}
                              {productData.price}
                            </dd>
                          </div>
                          <div className="space-x-1">
                            <dt className="inline">Size:</dt>
                            <dd className="inline">{item.size}</dd>
                          </div>

                          <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">White</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label htmlFor="Line1Qty" className="sr-only">
                            {' '}
                            Quantity{' '}
                          </label>

                          <input
                            type="number"
                            onClick={(e) =>
                              e.target.value === '' || e.target.value === '0'
                                ? null
                                : updateQuantity(
                                    item._id,
                                    item.size,
                                    Number(e.target.value),
                                  )
                            }
                            defaultValue={item.quantity}
                            id="Line1Qty"
                            className="h-8 w-12 rounded border border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 "
                          />
                        </form>

                        <button
                          className="text-gray-600 transition hover:text-red-600"
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                        >
                          <span className="sr-only">Remove item</span>
                          <RiDeleteBin6Line className="size-4" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {cartData.length != 0 && <CartTotal />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
