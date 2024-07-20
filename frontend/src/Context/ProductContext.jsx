import React, { createContext, useState } from "react";

import all_product from "../assets/all_product";

export const ProductContext = createContext(null);

// Cart
const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }

  return cart;
};

const ProductContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    // console.log(cartItems)
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };



// Total cart Amount
  const getTotalCartAmount = () => {
    let totalAmount =  0;
    for(const item in cartItems) {
      if(cartItems[item] > 0){
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price  * cartItems[item]
      }

    }

    return totalAmount;
  }

  const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
