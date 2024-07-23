import React, { createContext, useEffect, useState } from "react";

// import all_product from "../assets/all_product";

export const ProductContext = createContext(null);

// Cart
const getDefaultCart = () => {
  let cart = {};


  // why 300+1
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  }

  return cart;
};

const ProductContextProvider = ({ children }) => {

  // form
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/allproducts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAll_Product(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

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


  const getTotalItems = () => {

    let totalItem = 0;

    for(const item in cartItems){
      if(cartItems[item] > 0){
        totalItem+= cartItems[item]
      }
    }

    return totalItem;
    
  }

  const contextValue = { getTotalItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
