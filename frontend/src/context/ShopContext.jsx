import { createContext, useEffect, useState } from 'react';

import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const price = '';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity ) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    price,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity
  };

  return (
    <>
      <shopContext.Provider value={value}>
        {props.children}
      </shopContext.Provider>
    </>
  );
};

export default ShopContextProvider;
