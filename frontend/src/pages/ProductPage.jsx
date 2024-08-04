import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProduct from "../components/RelatedProduct";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";


const ProductPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    axios.get(`/api/products/${id}`).then(({ data }) => {
      setProduct(data.product);
      setSimilar(data.similar);
    });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ProductDisplay user={user} product={product} similarProducts={similar} id={id} />
      <Footer />
    </>
  );
};

export default ProductPage;
