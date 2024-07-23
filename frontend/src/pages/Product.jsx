import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ProductContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <ProductDisplay product={product} />
    </>
  );
};

export default Product;
