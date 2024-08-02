import React from "react";
import ProductPreview from "./ProductPreview";

const RelatedProduct = ({ similarProducts }) => {
  return (
    <>
      <div className="pb-8 max-w-[900px] bg-gray-300 m-auto">
        <div>
          <div className="bg-gray-700 max-w-[900px] m-auto">
            <h2 className="px-6 py-2 text-white text-[1.1rem]">
              You May Also Like
            </h2>
          </div>
        </div>
        <div className="max-w-[800px] m-auto pt-6 px-6 sl:px-0 space-y-5">
          {similarProducts.map((item, i) => (
            <ProductPreview
              key={i}
              id={item.id}
              name={item.name}
              features={item.features}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
