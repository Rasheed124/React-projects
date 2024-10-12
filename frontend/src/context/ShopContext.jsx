import { createContext, useState } from 'react';

import { products } from '../assets/assets';


export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const price = '';
  const [search , setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true)

  const value = {
    products,
    currency,
    price,
    search, setSearch, showSearch, setShowSearch
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
