import React, { useContext } from 'react';
import { shopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const CartTotal = () => {
  const { products, currency, delivery_fee, getCartAmount, navigate } =
    useContext(shopContext);
  return (
    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
      <div className="w-screen max-w-lg space-y-4">
        <dl className="space-y-0.5 text-sm text-gray-700">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>
              {currency}
              {getCartAmount()}.00
            </dd>
          </div>

          <div className="flex justify-between">
            <dt>Shipping fee</dt>
            <dd>
              {currency}
              {delivery_fee}.00
            </dd>
          </div>

          <div className="flex justify-between !text-base font-medium">
            <dt>Total</dt>
            <dd>
              {currency}
              {getCartAmount() === 0
                ? 0
                : getCartAmount() + delivery_fee}.00{' '}
            </dd>
          </div>
        </dl>

        <div className="flex justify-end">
          {/* <button
          onClick={() =>  navigate('/place-order')}
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Checkout
        </button> */}

          <Link
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            to={'/place-order'}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
