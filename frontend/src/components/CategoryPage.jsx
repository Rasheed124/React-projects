import React, { useEffect, useState } from 'react';
import axios from '../axios';
import Navbar from './Navbar';
import ProductPreview from './ProductPreview';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Footer from './Footer';

const CategoryPage = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/products/category/${category}`)
      .then(({ data }) => {
        setLoading(false);
        setProducts(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message);
      });
  }, [category]);

  console.log(products);

//   const productsSearch = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   function ProductSearch({ _id, category, name, pictures }) {
//     return (
//       <ProductPreview
//         key={i}
//         id={item.id}
//         name={item.name}
//         features={item.features}
//         image={item.image}
//         old_price={item.old_price}
//         new_price={item.new_price}
//       />
//     );
//   }

  return (
    <>
      <div>
        <div className="bg-gray-600">
          <div className="bg-gray-400 fixed w-full z-20">
            <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
              <p className="text-black text-3xl">
                <Link to="/">
                  <IoIosArrowRoundBack />
                </Link>
              </p>
              <h2 className="text-black text-[1.1rem] uppercase">All Items</h2>
              <div></div>{' '}
              {/* This empty div creates space for the center alignment */}
            </div>
          </div>
          <div className="max-w-[1000px] m-auto bg-gray-300">
            <div className="lithium max-w-[900px] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 pb-8 px-6">
              {products &&
                products.map((product, index) => {
                  return (
                    <ProductPreview key={index} {...product} />
                  );
                })}
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default CategoryPage;
