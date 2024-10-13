import React, { useContext, useEffect, useState } from 'react';
import LatestCollection from '../components/LatestCollection';
import { assets, products } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import { useFetcher } from 'react-router-dom';
import { shopContext } from '../context/ShopContext';

const Collection = () => {
  const { products,search, setSearch, showSearch, setShowSearch  } =
  useContext(shopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy =  productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    // Filter by subcategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }


    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let prCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(prCopy.sort((a, b) => a.price - b.price));
      break;
      case 'high-low':
        setFilterProducts(prCopy.sort((a, b) => b.price - a.price));
      break;

      default:
        applyFilter();
        break;
    
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <section className="mx-auto max-w-screen-xl flex  flex-col md:flex-row gap-5 sm:gap-10 pt-10 border-t px-5 ">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="flex cursor-pointer items-center gap-5"
        >
          {' '}
          Filters
          <img
            src={assets.dropdown_icon}
            className={`${showFilter ? 'rotate-90' : ''} h-3 md:hidden`}
            alt=""
          />
        </p>

        <div
          className={`border mt-5 p-5 ${showFilter ? '' : 'hidden'} md:block`}
        >
          <p>Categories</p>

          <div className="flex flex-col gap-2 text-sm ">
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                value={'Men'}
                onChange={toggleCategory}
              />{' '}
              Men
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                value={'Women'}
                onChange={toggleCategory}
              />{' '}
              Women
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                value={'Kids'}
                onChange={toggleCategory}
              />{' '}
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border mt-5 p-5 ${showFilter ? '' : 'hidden'} md:block`}
        >
          <p>Types</p>

          <div className="flex flex-col gap-2 text-sm ">
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                value={'Topwear'}
                onChange={toggleSubCategory}
              />{' '}
              Topwear
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />{' '}
              Bottomwear
            </p>
            <p className="flex gap-2 ">
              <input
                className="w-3"
                type="checkbox"
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />{' '}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <>
        <div className="flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 border">
          {/* Product Item */}

          <div className="flex justify-between">
            <h2>All collections</h2>

            {/* Product Sort */}

            <select onChange={(e) => setSortType(e.target.value)} className="mt-1.5  rounded-lg border-gray-300 text-gray-700 sm:text-sm">
              <option value="relavant">Sort by: Relevant</option>
              <option value="low-high">Sort by: low-high</option>
              <option value="high-low">Sort by: high-low</option>
           
            </select>
          </div>

          {/* Display Product */}

          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filterProducts.map((product, index) => (
              <ProductItem
                key={index}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default Collection;
