import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../context/ShopContext';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(shopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState('')
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  console.log(productId);

  return productData ? (
    <>
      <section className="mx-auto max-w-screen-xl  px-5 py-20">
        <div className="transition-opacity ease-in duration-500 opacity-100">
          <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
            {/* Product Images */}

            <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll md:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
                {productData.image.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt=""
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                    onClick={() => setImage(item)}
                  />
                ))}
              </div>
              <div className="w-full sm:w-[80%]">
                <img src={image} className="w-full h-auto" alt="" />
              </div>
            </div>

            {/* --------------------Product Info */}

            <div className="flex-1">
              <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                {productData.name}
              </h3>

              <p className="text-gray-700 mt-2">
                {productData.price}
                <span className="text-gray-400 line-through ml-1">$80</span>
              </p>

              <p className="mt-1.5 line-clamp-3 text-gray-700">
                {productData.description}
              </p>

              {/* Sizes */}
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() =>  setSize(item)}
                      className={`rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition ${size == item ? 'border' : ''}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-4">
              

                <button
                  type="button"
                  className=" rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                >
                Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display Related Products */}

        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </section>
    </>
  ) : (
    <div className="opacity-0"> </div>
  );
};

export default Product;
