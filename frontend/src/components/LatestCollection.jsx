import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(shopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);



  return (
    <div>
      {/* Latest Product Collections */}

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>


          {/* Product Item */}
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {latestProducts.map((product, index) => (
              <ProductItem
                key={index}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LatestCollection;
