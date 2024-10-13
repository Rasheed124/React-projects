import { createContext, useEffect, useState } from 'react';

import { products } from '../assets/assets';

export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const price = '';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const [cartItems, setCartItems] = useState({});

  const addToCart = async () => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
       if(cartData[itemId][size]){
        cartData[itemId][size] += 1
       }else{
        cartData[itemId][size] = 1;
       }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData)
  };

  useEffect(() => {
    // addToCart()
    console.log();
    
  }, [cartItems])

  const value = {
    products,
    currency,
    price,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems, addToCart
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
