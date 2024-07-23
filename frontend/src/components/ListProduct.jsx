import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Item from "../components/Item";

const ListProduct = () => {
  const { all_product } = useContext(ProductContext);

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
              <div></div>{" "}
              {/* This empty div creates space for the center alignment */}
            </div>
          </div>
          <div className="max-w-[1000px] m-auto bg-gray-300">
            <div className="lithium max-w-[900px] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 pb-8 px-6">
              {all_product &&
                all_product.map((item, i) => {
                
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
        </div>
      </div>
    </>
  );
};

export default ListProduct;
