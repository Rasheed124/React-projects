import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="max-w-screen-md mx-auto relative  w-full bg-gray-100">
      <div className="p-5">
        <label htmlFor="Search" className="sr-only">
          {' '}
          Search{' '}
        </label>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for..."
          className="w-full rounded-md p-5 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm outline-none"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
