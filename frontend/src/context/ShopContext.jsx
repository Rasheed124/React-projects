import { createContext } from 'react';

import { products } from '../assets/assets';


export const shopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const price = '';

  const value = {
    products,
    currency,
    price,
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
