import React, { createContext, useEffect, useState } from "react";


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
  const [recently_published, setRecently_published] = useState([]);
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());


// Fetching all Products
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


    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/getcart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json', 
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: "",
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCartItems(data)
      })
      .catch((error) => {
        console.error('Error loading cart data:', error);
      });
    }



  }, []);

// Fetching all recentlypublished Products
  useEffect(() => {
    const recentlyPublished = async () => {
      try {
        const response = await fetch('http://localhost:4000/recentlypublished');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecently_published(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    recentlyPublished();
  }, []);

  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

  // Check if user is authenticated
  if (localStorage.getItem('auth-token')) {
    fetch('http://localhost:4000/addtocart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'auth-token': localStorage.getItem('auth-token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({itemId })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Cart updated:', data);
   
    })
    .catch((error) => {
      console.error('Error adding to cart:', error);
    });
  }

  
  };


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    // if required
    // setCartItems((prev) => {
    //   const newCartItems = { ...prev };
    //   if (newCartItems[itemId] > 0) {
    //     newCartItems[itemId] -= 1;
    //   }
    //   return newCartItems;
    // });

      // Check if user is authenticated
  if (localStorage.getItem('auth-token')) {
    fetch('http://localhost:4000/removefromcart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'auth-token': localStorage.getItem('auth-token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({itemId })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Cart updated:', data);
  
    })
    .catch((error) => {
      console.error('Error adding to cart:', error);
    });
  }
  };



// Total cart Amount
const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = all_product.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item];
      }
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

  const contextValue = { getTotalItems, getTotalCartAmount, all_product, recently_published, cartItems, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
