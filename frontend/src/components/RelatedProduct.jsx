import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);

  const [relatedProduct, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);

      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory,
      );

      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <section className="mx-auto max-w-screen-xl mt-10  px-5 ">
      <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
        Related Products
      </h2>

      {/* Product Item */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {relatedProduct.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default RelatedProduct;
