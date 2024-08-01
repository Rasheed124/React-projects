import React, { useContext } from "react";

import Item from "../components/Item";
import Navbar from "../components/Navbar";
import { ProductContext } from "../Context/ProductContext";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/Footer";

const Home = () => {

  const { all_product } = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <div className=" ">
        <div className="lg:bg-gray-600">
          <div className="pt-[7.3rem] lg:pt-[4.3rem] w-full relative">
            <div className="bg-gray-700 py-4">
              <div className="max-w-[400px] m-auto text-center text-white">
                <p>CALL TO ORDER: 08184370911</p>
                <p>REDEFINE THE WAY YOU CHARGE</p>
              </div>
            </div>
          </div>
          <div className="max-w-[1000px] bg-gray-300 m-auto">
            <div className="">
              <a href="/Account">
                <h2 className="py-3 px-6">Good Deals!!!</h2>
              </a>

              {/* Product Deals Data  */}
              <div className="grid md:grid-cols-2 lg:max-w-[900px] m-auto bg-gray-300 bg-transparent px-6 sl:px-0 gap-3 md:gap-4 lg:gap-6 item">
                {all_product.map((item, i) => {
                  return (
                    <Item
                      key={i}
                      id={item.id}
                      name={item.name}
                      features={item.features}
                      image={item.image}
                      old_price={item.old_price}
                      new_price={item.new_price}
                    />
                  );
                })}
              </div>
            </div>
            <div className="py-10 bg-gray-300 sl:bg-transparent">
              <div className="bg-gray-700">
                <h2 className="px-6 sl:px-0 lg:max-w-[900px] m-auto py-2 text-white text-[1.1rem] uppercase">
                  recently viewed
                </h2>
              </div>
              <div className="px-6 sl:px-0 lg:max-w-[900px] m-auto pt-7">
                  <RecentlyViewed />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />

    
    </>
  );
};

export default Home;
