import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <>
      <div>
        <div className="bg-gray-200 fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/cart">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">
              Order Confirmation
            </h2>
            <div></div>
          </div>
        </div>

        <div className="pt-20 bg-gray-800 min-h-lvh">
          <div className="max-w-[700px] m-auto px-3">
            <h2 className="bg-gray-300 py-2 rounded-tl-lg rounded-tr-lg pl-4">
              Order Summary
            </h2>
            <ul className="py-3 bg-gray-200 mt-2 px-3 rounded-bl-lg rounded-br-lg">
              <li className="flex items-center justify-between pt-2">
                <p>Items Total (5)</p> <p>₦5000</p>
              </li>
              <li className="flex items-center justify-between pt-2">
                <p>Delivery Fees</p> <p>₦500</p>
              </li>
              <li className="flex items-center justify-between pt-2 border-t border-gray-400">
                <p>Total</p> <p>₦5500</p>
              </li>
            </ul>
          </div>
          <div className="py-6">
            <div className="max-w-[700px] m-auto px-3">
              <div className="bg-gray-300 py-2 rounded-tl-lg rounded-tr-lg px-4 flex items-center justify-between">
                <h2>Order Details</h2>
                <button>Edit</button>
              </div>
              <ul className="py-3 bg-gray-200 mt-2 px-3 rounded-bl-lg rounded-br-lg">
                <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                  <p>State:</p> <p>Lagos</p>
                </li>
                <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                  <p>Mode:</p> <p>Delivery</p>
                </li>
                <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                  <p>City:</p> <p>Ikeja</p>
                </li>
                <li className="flex gap-3 py-2 border-b border-gray-400 ">
                  <p>Address:</p> <p>123 Street</p>
                </li>
                <li className="flex items-center gap-3 py-2 border-b border-gray-400">
                  <p>Name:</p> <p>John Doe</p>
                </li>
                <li className="flex items-center gap-3 py-2">
                  <p>Number:</p> <p>08012345678</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 lg:rounded-md sticky bottom-0 px-3 py-2 shadow-lg max-w-[700px] m-auto">
            <button
              type="submit"
              className="bg-gray-800 py-2 w-full rounded-md text-gray-100"
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationPage;
